"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PostHogProvider, usePostHog } from "posthog-js/react";
import {
  postHogApiHost,
  postHogNeedsUiHost,
  postHogUiHost,
  publicPostHogKey,
  shouldLoadPostHog,
} from "@/lib/app-config";

function PostHogPageViewInner() {
  const posthog = usePostHog();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrl = useRef("");

  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;
    const qs = searchParams.toString();
    const pathWithQs = qs ? `${pathname}?${qs}` : pathname;
    const url = `${window.location.origin}${pathWithQs}`;
    if (url === lastUrl.current) return;
    lastUrl.current = url;
    posthog.capture("$pageview", {
      $current_url: url,
    });
  }, [pathname, searchParams, posthog]);

  return null;
}

function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageViewInner />
    </Suspense>
  );
}

export function PostHogClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const key = publicPostHogKey();
  const enabled = shouldLoadPostHog();

  const options = useMemo(() => {
    const base: {
      api_host: string;
      ui_host?: string;
      capture_pageview: boolean;
    } = {
      api_host: postHogApiHost(),
      capture_pageview: false,
    };
    if (postHogNeedsUiHost()) {
      base.ui_host = postHogUiHost();
    }
    return base;
  }, []);

  if (!enabled || !key) {
    return <>{children}</>;
  }

  return (
    <PostHogProvider apiKey={key} options={options}>
      <PostHogPageView />
      {children}
    </PostHogProvider>
  );
}

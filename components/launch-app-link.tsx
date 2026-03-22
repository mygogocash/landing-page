"use client";

import { useCallback } from "react";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";
import { LINE_MINI_APP_HREF, WEB_APP_HREF } from "@/components/social-data";
import { getFirebaseApp } from "@/lib/firebase";

type LaunchAppLinkProps = {
  className: string;
  children: React.ReactNode;
};

function logLaunchClick(surface: "web_desktop" | "line_mobile") {
  const app = getFirebaseApp();
  if (!app) return;
  void isSupported().then((supported) => {
    if (!supported) return;
    try {
      logEvent(getAnalytics(app), "select_content", {
        content_type: "cta_launch_app",
        item_id: surface,
      });
    } catch {
      /* optional analytics */
    }
  });
}

/**
 * Desktop (md+): opens web app. Mobile: opens LINE Mini App.
 * Pass full button styles in `className`; visibility toggles are applied here.
 */
export default function LaunchAppLink({
  className,
  children,
}: LaunchAppLinkProps) {
  const external = {
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  };

  const onWeb = useCallback(() => logLaunchClick("web_desktop"), []);
  const onLine = useCallback(() => logLaunchClick("line_mobile"), []);

  return (
    <>
      <a
        href={WEB_APP_HREF}
        {...external}
        onClick={onWeb}
        className={`${className} hidden md:inline-flex`}
      >
        {children}
      </a>
      <a
        href={LINE_MINI_APP_HREF}
        {...external}
        onClick={onLine}
        className={`${className} inline-flex md:hidden`}
      >
        {children}
      </a>
    </>
  );
}

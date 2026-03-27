"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
  type TransitionEvent,
} from "react";
import TruckLoader from "@/components/truck-loader";
import {
  prefersReducedMotion,
} from "@/hooks/use-prefers-reduced-motion";

const SESSION_KEY = "gogocash-landing-splash-seen";
const MIN_VISIBLE_MS = 550;
const MAX_VISIBLE_MS = 4000;

type Props = { children: ReactNode };

/** Full-viewport loader on first visit per tab; skipped when reduced motion or already seen. */
export default function LoadingScreen({ children }: Props) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [exiting, setExiting] = useState(false);

  const dismiss = useCallback(() => {
    setShowOverlay(false);
    setExiting(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* private mode */
    }
  }, []);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        queueMicrotask(() => setShowOverlay(false));
        return;
      }
    } catch {
      /* private mode */
    }
    if (prefersReducedMotion()) {
      queueMicrotask(() => setShowOverlay(false));
    }
  }, []);

  useEffect(() => {
    if (!showOverlay) return;
    const minId = window.setTimeout(() => setExiting(true), MIN_VISIBLE_MS);
    const maxId = window.setTimeout(() => setExiting(true), MAX_VISIBLE_MS);
    return () => {
      window.clearTimeout(minId);
      window.clearTimeout(maxId);
    };
  }, [showOverlay]);

  useEffect(() => {
    if (!showOverlay) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showOverlay]);

  const onOverlayTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.propertyName !== "opacity" || !exiting) {
      return;
    }
    dismiss();
  };

  return (
    <>
      {children}
      {showOverlay ? (
        <div
          role="status"
          aria-live="polite"
          aria-busy={!exiting}
          aria-label="Loading"
          className={`fixed inset-0 z-[200] flex items-center justify-center bg-white transition-opacity duration-300 ease-out motion-reduce:duration-150 ${
            exiting ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          onTransitionEnd={onOverlayTransitionEnd}
        >
          <TruckLoader />
        </div>
      ) : null}
    </>
  );
}

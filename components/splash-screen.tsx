"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type TransitionEvent,
} from "react";
import GoGoCashLogo from "@/components/gogocash-logo";

const STORAGE_KEY = "gogocash-splash-dismissed";
const AUTO_DISMISS_MS = 2800;

type Props = { children: ReactNode };

export default function SplashScreen({ children }: Props) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [exiting, setExiting] = useState(false);
  const continueRef = useRef<HTMLButtonElement>(null);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        // Skip splash for returning visits; must run after hydration (sessionStorage).
        // eslint-disable-next-line react-hooks/set-state-in-effect -- sync with sessionStorage post-hydration
        setShowOverlay(false);
      }
    } catch {
      /* private mode / disabled storage */
    }
  }, []);

  const finishDismiss = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setShowOverlay(false);
    setExiting(false);
  }, []);

  const beginExit = useCallback(() => {
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setExiting(true);
  }, []);

  useEffect(() => {
    if (!showOverlay || exiting) return;
    autoTimerRef.current = setTimeout(() => {
      autoTimerRef.current = null;
      beginExit();
    }, AUTO_DISMISS_MS);
    return () => {
      if (autoTimerRef.current) {
        clearTimeout(autoTimerRef.current);
        autoTimerRef.current = null;
      }
    };
  }, [showOverlay, exiting, beginExit]);

  useEffect(() => {
    if (!showOverlay) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showOverlay]);

  useEffect(() => {
    if (!showOverlay || exiting) return;
    continueRef.current?.focus();
  }, [showOverlay, exiting]);

  const onOverlayTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "opacity" || !exiting) return;
    finishDismiss();
  };

  return (
    <>
      {children}
      {showOverlay ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="splash-heading"
          className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-b from-white via-mint to-primary/15 transition-opacity duration-500 ease-out motion-reduce:duration-150 ${
            exiting ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
          onTransitionEnd={onOverlayTransitionEnd}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(16,185,129,0.12),transparent)]"
            aria-hidden="true"
          />
          <div className="relative flex max-w-md flex-col items-center gap-8 px-8 text-center">
            <div className="animate-splash-enter motion-reduce:animate-none flex flex-col items-center gap-2">
              <GoGoCashLogo className="h-14 sm:h-16" variant="color" />
              <p
                id="splash-heading"
                className="mt-4 text-lg font-semibold text-gray-800 sm:text-xl"
              >
                Save Cash on Every Spend
              </p>
              <p className="text-sm text-gray-500">
                Cashback on the brands you already love.
              </p>
            </div>
            <button
              ref={continueRef}
              type="button"
              onClick={beginExit}
              className="pointer-events-auto rounded-full bg-primary px-10 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-dark hover:shadow-xl motion-reduce:transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

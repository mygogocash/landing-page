"use client";

import { useCallback, useEffect, useState, type ReactNode, type TransitionEvent } from "react";
import TruckLoader from "@/components/truck-loader";

const MIN_VISIBLE_MS = 550;
const MAX_VISIBLE_MS = 4000;

type Props = { children: ReactNode };

/** Full-viewport truck loader while the shell hydrates; fades out automatically. */
export default function LoadingScreen({ children }: Props) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [exiting, setExiting] = useState(false);

  const dismiss = useCallback(() => {
    setShowOverlay(false);
    setExiting(false);
  }, []);

  useEffect(() => {
    const minId = window.setTimeout(() => setExiting(true), MIN_VISIBLE_MS);
    const maxId = window.setTimeout(() => setExiting(true), MAX_VISIBLE_MS);
    return () => {
      window.clearTimeout(minId);
      window.clearTimeout(maxId);
    };
  }, []);

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

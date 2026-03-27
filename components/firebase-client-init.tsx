"use client";

import { useEffect } from "react";
import { initFirebaseAnalytics } from "@/lib/analytics-client";
import { getFirebaseApp } from "@/lib/firebase";

/**
 * Browser-only: `initializeApp` + GA4 via `initFirebaseAnalytics()` (modular SDK).
 */
export function FirebaseClientInit() {
  useEffect(() => {
    getFirebaseApp();
    initFirebaseAnalytics();
  }, []);

  return null;
}

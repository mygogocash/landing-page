"use client";

import { useEffect } from "react";
import { getFirebaseApp } from "@/lib/firebase";

/**
 * Initializes the Firebase web app once via the npm SDK (`initializeApp`).
 * GA4 page views use the gtag `<Script>` tags in the root layout to match
 * Firebase’s script-tag setup and avoid double-reporting with `getAnalytics`.
 */
export function FirebaseClientInit() {
  useEffect(() => {
    getFirebaseApp();
  }, []);

  return null;
}

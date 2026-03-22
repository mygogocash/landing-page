"use client";

import { useEffect } from "react";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirebaseApp } from "@/lib/firebase";

/**
 * Initializes Firebase Analytics on the client using the modular npm SDK
 * (equivalent to loading the gstatic CDN scripts, but tree-shaken via the bundler).
 */
export function FirebaseAnalytics() {
  useEffect(() => {
    const app = getFirebaseApp();
    if (!app) return;

    void isSupported().then((supported) => {
      if (supported) getAnalytics(app);
    });
  }, []);

  return null;
}

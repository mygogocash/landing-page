import {
  getApps,
  initializeApp,
  type FirebaseApp,
  type FirebaseOptions,
} from "firebase/app";

/**
 * Default web app config (Firebase console). Override any field with
 * `NEXT_PUBLIC_FIREBASE_*` env vars for different environments.
 */
const DEFAULT_FIREBASE_CONFIG: FirebaseOptions = {
  apiKey: "AIzaSyDrxKfICfS512IFSjfPomoFZSwy-D-vPZI",
  authDomain: "landing-page-4ae23.firebaseapp.com",
  projectId: "landing-page-4ae23",
  storageBucket: "landing-page-4ae23.firebasestorage.app",
  messagingSenderId: "110817639529",
  appId: "1:110817639529:web:7aa0d7da755797ecac76f8",
  measurementId: "G-P2VW9MSYV7",
};

/** GA4 measurement ID for `next/script` gtag snippets and custom events. */
export const firebaseMeasurementId =
  process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ??
  DEFAULT_FIREBASE_CONFIG.measurementId ??
  "";

function clientConfig(): FirebaseOptions | null {
  const apiKey =
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? DEFAULT_FIREBASE_CONFIG.apiKey;
  if (!apiKey) return null;

  return {
    apiKey,
    authDomain:
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ??
      DEFAULT_FIREBASE_CONFIG.authDomain,
    projectId:
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ??
      DEFAULT_FIREBASE_CONFIG.projectId,
    storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ??
      DEFAULT_FIREBASE_CONFIG.storageBucket,
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ??
      DEFAULT_FIREBASE_CONFIG.messagingSenderId,
    appId:
      process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? DEFAULT_FIREBASE_CONFIG.appId,
    measurementId:
      process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ??
      DEFAULT_FIREBASE_CONFIG.measurementId,
  };
}

/**
 * Returns the Firebase app in the browser (npm modular SDK: `initializeApp`).
 * Safe to call from client components / effects only (not during SSR render).
 */
export function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === "undefined") return null;

  const config = clientConfig();
  if (!config?.projectId) return null;

  const existing = getApps()[0];
  if (existing) return existing;

  return initializeApp(config);
}

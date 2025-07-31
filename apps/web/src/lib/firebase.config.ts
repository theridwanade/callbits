import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize app (singleton pattern)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics if supported
// let analytics: ReturnType<typeof getAnalytics> | null = null;
// if (typeof window !== "undefined") {
//     isAnalyticsSupported().then((supported) => {
//         if (supported) analytics = getAnalytics(app);
//     });
// }

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

// Connect Emulators in Development
const isEmulator = typeof window !== "undefined" && process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true";

if (isEmulator) {
    // Auth Emulator (default: 9099)
    connectAuthEmulator(auth, "http://localhost:9099");
    // Firestore Emulator (default: 8080)
    connectFirestoreEmulator(db, "localhost", 8080);
    // Cloud Functions Emulator (default: 5001)
    connectFunctionsEmulator(functions, "localhost", 5001);
}

export { app, auth, db, functions };

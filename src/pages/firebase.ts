import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
    apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_FIREBASE_APP_ID,
});

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;

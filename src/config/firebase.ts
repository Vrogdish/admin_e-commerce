import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: process.env.NEXT_PUBLIC_ANALYTICS_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_ANALYTICS_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_ANALYTICS_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_ANALYTICS_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_ANALYTICS_MESSAGING,
  appId: process.env.NEXT_PUBLIC_ANALYTICS_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_ANALYTICS_MEASUREMENT
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
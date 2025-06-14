import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  databaseURL: "https://wkwk-bingo-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const realtimeDatabase = getDatabase(app);
export const auth = getAuth(app);

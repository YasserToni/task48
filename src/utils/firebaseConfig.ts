// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { FIREBASE_API } from '../config-global';

// Initialize Firebase
const app = initializeApp(FIREBASE_API);
export const auth = getAuth(app);

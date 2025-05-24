import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpU833fVJ_2uXVjOs9a_F4kH5zXIGCbLE",
  authDomain: "korean-dictionary-67f9d.firebaseapp.com",
  projectId: "korean-dictionary-67f9d",
  storageBucket: "korean-dictionary-67f9d.firebasestorage.app",
  messagingSenderId: "986367179371",
  appId: "1:986367179371:web:2e687739016a60c776cf2e",
  measurementId: "G-CC457P501K"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
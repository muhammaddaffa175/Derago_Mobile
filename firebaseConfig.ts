import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB9GlV52y9zWrambuM4a2Q6nW5SkxZisE",
  authDomain: "deragomobile-8f573.firebaseapp.com",
  projectId: "deragomobile-8f573",
  storageBucket: "deragomobile-8f573.firebasestorage.app",
  messagingSenderId: "899255019079",
  appId: "1:899255019079:web:7f74627ca54399a4133362"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;

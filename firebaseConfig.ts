// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAB9GlV52y9zWrambuM4a2Q6nW5SkxZisE",
//   authDomain: "deragomobile-8f573.firebaseapp.com",
//   projectId: "deragomobile-8f573",
//   storageBucket: "deragomobile-8f573.firebasestorage.app",
//   messagingSenderId: "899255019079",
//   appId: "1:899255019079:web:7f74627ca54399a4133362"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

// // Initialize Cloud Firestore and get a reference to the service
// export const db = getFirestore(app);

// export default app;


import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrn_5-iXrlMqt36fvLDnJ6FJfBPQ_PDks",
  authDomain: "auth-derago.firebaseapp.com",
  databaseURL: "https://auth-derago-default-rtdb.firebaseio.com",
  projectId: "auth-derago",
  storageBucket: "auth-derago.firebasestorage.app",
  messagingSenderId: "499415292914",
  appId: "1:499415292914:web:e2a20c36a36186ed0ea96b"
};

// Initialize Firebase app only if no app is already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;


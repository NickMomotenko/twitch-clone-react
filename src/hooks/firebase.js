import React from "react";

import firebase from "firebase";

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDX45IVxKZd6KOLujGZGLjriTIuSiIEIGs",
    authDomain: "twitch-clone-ac0f5.firebaseapp.com",
    projectId: "twitch-clone-ac0f5",
    storageBucket: "twitch-clone-ac0f5.appspot.com",
    messagingSenderId: "813669523838",
    appId: "1:813669523838:web:d21888db6ad588634e932f",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();

  return { db };
};

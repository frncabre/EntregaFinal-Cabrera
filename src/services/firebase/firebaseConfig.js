import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXCUBdKE53r5x4ZBX0gYwBIIpiK627Qgo",
  authDomain: "ecommerce-cabrera-d10c3.firebaseapp.com",
  projectId: "ecommerce-cabrera-d10c3",
  storageBucket: "ecommerce-cabrera-d10c3.appspot.com",
  messagingSenderId: "59018116946",
  appId: "1:59018116946:web:686fef2d1fd65c1184c48b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

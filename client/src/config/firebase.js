import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJelGVVYRAsPq_2A7Tqh4Jl31h9xFmNJg",
  authDomain: "twitter-f342b.firebaseapp.com",
  projectId: "twitter-f342b",
  storageBucket: "twitter-f342b.appspot.com",
  messagingSenderId: "554531627782",
  appId: "1: 554531627782: web: f225cf4cfeb62d08faf487",
  measurementId: "G-8VTSZRLV1S",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

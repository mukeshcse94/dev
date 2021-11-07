import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDxXaDxok6eY-chbAaBRh8pMShN6CFR0vs",
  authDomain: "socialideas-ad6cc.firebaseapp.com",
  projectId: "socialideas-ad6cc",
  storageBucket: "socialideas-ad6cc.appspot.com",
  messagingSenderId: "367867465684",
  appId: "1:367867465684:web:69c7fe82033fa0961c5041",
  measurementId: "G-KTRZ0R5ZD9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase;
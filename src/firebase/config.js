import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaAvZ6wThykgtHJXKC7lOdpPBFHOWjrL8",
  authDomain: "bluesea-970b3.firebaseapp.com",
  projectId: "bluesea-970b3",
  storageBucket: "bluesea-970b3.appspot.com",
  messagingSenderId: "437184982921",
  appId: "1:437184982921:web:124f009a633c2d1c887b58",
  measurementId: "G-7CDSE7GKJ8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signupWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signinWithGoogle = async () => {
  const googleProvider = new firebaseConfig.auth.GoogleAuthProvider()
  await auth.signInWithPopup(googleProvider);
};

export { signupWithEmail, signinWithGoogle };
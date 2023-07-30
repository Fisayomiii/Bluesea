// Import required functions from Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Import the Vuex store instance
import store from '../vuex/store';

// Firebase configuration object containing API keys and project settings
const firebaseConfig = {
  // Replace with your Firebase API key
  apiKey: "AIzaSyCaAvZ6wThykgtHJXKC7lOdpPBFHOWjrL8",
  authDomain: "bluesea-970b3.firebaseapp.com",
  projectId: "bluesea-970b3",
  storageBucket: "bluesea-970b3.appspot.com",
  messagingSenderId: "437184982921",
  appId: "1:437184982921:web:124f009a633c2d1c887b58",
  measurementId: "G-7CDSE7GKJ8"
};

// Initialize the Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Get the authentication instance from Firebase using the initialized app
const auth = getAuth(app);

// Create a new instance of the GoogleAuthProvider class
const provider = new GoogleAuthProvider();

// Function to set user data in the local storage (used for session persistence)
const setUserInLocalStorage = (user) => {
  if (user) {
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
  } else {
    localStorage.removeItem('user');
  }
};

// Function to sign up a user with email and password
const signupWithEmail = (email, password) => {
  // Call the Firebase function createUserWithEmailAndPassword with email and password parameters
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Extract the user from the userCredential object
      const user = userCredential.user;

      // Set default photo URL and display name for the user
      const defaultPhotoURL = 'https://media.istockphoto.com/id/1371797889/vector/young-smiling-man-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-3d.jpg?s=612x612&w=0&k=20&c=WykJb6hyEUv8T9k86g-LG9u980sEwqK8FG1m1tXgnSI=';
      user.photoURL = defaultPhotoURL;
      const defaultDisplayName = 'Guest';
      user.displayName = defaultDisplayName;

      // Store user data in local storage and Vuex store
      setUserInLocalStorage(user);
      store.dispatch('setUser', user);

      // Return the user object
      return user;
    })
    .catch((error) => {
      console.error('Signup error:', error.message);
      throw error;
    });
};

// Function to sign in a user with email and password
const signInWithEmail = (email, password) => {
  // Call the Firebase function signInWithEmailAndPassword with email and password parameters
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Extract the user from the userCredential object
      const user = userCredential.user;

      // Set default photo URL and display name for the user
      const defaultPhotoURL = 'https://img.freepik.com/free-icon/user_318-864851.jpg?size=626&ext=jpg&ga=GA1.2.1799081320.1690726741&semt=ais';
      user.photoURL = defaultPhotoURL;
      const defaultDisplayName = 'Google User';
      user.displayName = defaultDisplayName;

      // Store user data in local storage and Vuex store
      setUserInLocalStorage(user);
      store.dispatch('setUser', user);

      // Return the user object
      return user;
    })
    .catch((error) => {
      console.error('Sign-in error:', error.message);
      throw error;
    });
};

// Function to sign in a user with Google authentication
const signInWithGoogle = () => {
  // Create a new instance of the GoogleAuthProvider class
  const provider = new GoogleAuthProvider();

  // Call the Firebase function signInWithPopup with the GoogleAuthProvider instance
  return signInWithPopup(auth, provider)
    .then((userCredential) => {
      // Extract the user from the userCredential object
      const user = userCredential.user;

      // Store user data in local storage and Vuex store
      setUserInLocalStorage(user);
      store.dispatch('setUser', user);

      // Return the user object
      return user;
    })
    .catch((error) => {
      console.error('Sign-in with Google error:', error.message);
      throw error;
    });
};

// Export the signupWithEmail, signInWithEmail, and signInWithGoogle functions
export { signupWithEmail, signInWithEmail, signInWithGoogle };

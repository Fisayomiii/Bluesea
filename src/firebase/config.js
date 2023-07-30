import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import store from '../vuex/store';

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

const setUserInLocalStorage = (user) => {
  if (user) {
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
  } else {
    localStorage.removeItem('user');
  }
};

const signupWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const defaultPhotoURL = 'https://media.istockphoto.com/id/1371797889/vector/young-smiling-man-avatar-3d-vector-people-character-illustration-cartoon-minimal-style-3d.jpg?s=612x612&w=0&k=20&c=WykJb6hyEUv8T9k86g-LG9u980sEwqK8FG1m1tXgnSI='; // Replace with the path to your default image
      user.photoURL = defaultPhotoURL;
      const defaultDisplayName = 'Guest'; // Replace with your desired default display name
      user.displayName = defaultDisplayName;
      setUserInLocalStorage(user);
      store.dispatch('setUser', user);
      return user;
    })
    .catch((error) => {
      console.error('Signup error:', error.message);
      throw error;
    });
};

const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const defaultPhotoURL = 'https://img.freepik.com/free-icon/user_318-864851.jpg?size=626&ext=jpg&ga=GA1.2.1799081320.1690726741&semt=ais'; // Replace with the path to your default image
      user.photoURL = defaultPhotoURL;
      const defaultDisplayName = 'Google User'; // Replace with your desired default display name
      user.displayName = defaultDisplayName;
      setUserInLocalStorage(user);
      store.dispatch('setUser', user);
      return user;
    })
    .catch((error) => {
      console.error('Sign-in error:', error.message);
      throw error;
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      store.dispatch('setUser', user);
      return user;
    });
};

export { signupWithEmail, signInWithEmail, signInWithGoogle };
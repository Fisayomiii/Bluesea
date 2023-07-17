import { createApp } from 'vue';
import '../src/styles/index.css';
import App from './App.vue';
import router from "./router";

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCaAvZ6wThykgtHJXKC7lOdpPBFHOWjrL8",
//   authDomain: "bluesea-970b3.firebaseapp.com",
//   projectId: "bluesea-970b3",
//   storageBucket: "bluesea-970b3.appspot.com",
//   messagingSenderId: "437184982921",
//   appId: "1:437184982921:web:124f009a633c2d1c887b58",
//   measurementId: "G-7CDSE7GKJ8"
// };

// initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount('#app');
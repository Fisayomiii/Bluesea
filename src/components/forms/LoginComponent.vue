<template>
    <p v-if="errMsg" class="text-pink-900">{{ errMsg }}</p>

    <div class="form-wrapper">
        <form @submit.prevent="signIn" class="auth-form">
            <!-- <div class="form-control">
                <label for="Name">
                    <span>Name</span>
                </label>
                <input type="text" name="text" id="text" placeholder="Mary Jane">
                <span class="icon"><ion-icon class="list-icon" name="person-outline"></ion-icon></span>
            </div> -->

            <div class="form-control">
                <label for="email">
                    <span>Email</span>
                </label>
                <input type="email" placeholder="maryjane@gmail.com" v-model="email" required>
                <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
            </div>

            <div class="form-control">
                <label for="password"> Password </label>
                <input type="password" placeholder="6 characters or greater" v-model="password" required>
                <span class="icon"><ion-icon name="keypad-outline"></ion-icon></span>
            </div>

            <button type="submit" class="submit">
                Sign In
            </button>

            <button type="button" class="google-login" v-on:click="signinWithGoogle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25" height="25" class="icon">
                    <path fill="#4285F4"
                        d="M502.6 232.9c0-16.4-1.3-32.4-3.8-47.9H259v90h126.2c-5.3 27.8-21.1 51.4-44.8 65.8v54h72.5c42.6-39.4 67.1-97.5 67.1-162.9z" />
                    <path fill="#34A853"
                        d="M259 502.6c60.4 0 111.3-20 148.1-54.1l-72.5-54c-19.3 13.2-44.4 21.1-75.6 21.1-58 0-107.1-39.3-124.7-92.2H33.8v57.9c36.7 72.1 109.8 119.6 192.2 119.6z" />
                    <path fill="#FBBC05"
                        d="M134.3 299.9c-4.5-13.8-7-28.4-7-43.9s2.5-30.1 7-43.9V155H33.8a258.2 258.2 0 0 0 0 202.1l100.5-57.2z" />
                    <path fill="#EB4335"
                        d="M259 97c31.3 0 56.3 10.6 75.6 28.9l55.8-55.8C370.3 25.9 319.4 0 259 0 176.6 0 103.5 47.5 66.8 119.6L167.3 177C183.9 124.1 230.9 88 259 88z" />
                </svg>
                Sign in with Google
            </button>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import router from "../../router";

const email = ref("");
const password = ref("");
const errMsg = ref()


const signIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            alert("Successfully registered")
            console.log("Successfully registered");
            router.push("/feed");
        }).catch((error) => {
            alert(error.message)
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "User not found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Incorrect Email or Password ";
                    break;
            }
        })
}

const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/feed");
        }).catch((error) => {
            alert(error.message)
            console.log(error.code);
        })
}



// import { ref } from "vue";
// // import { signupWithEmail, signinWithGoogle } from "../../firebase/config"
// import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import router from "../../router";
// export default {
//     props: ['triggertoast'],
//     name: "Sign Up",
//     setup() {
//         const email = ref('');
//         const password = ref('');
//         const errMsg = ref()

//         const signin = () => {
//             const auth = getAuth()
//             signInWithEmailAndPassword(auth(), email.value, password.value)
//                 .then((data) => {
//                     console.log(auth.currentUser)
//                     console.log("Successfully signed in");
//                     router.push("/feed");
//                 }).catch((error) => {
//                     alert(error.message)
//                     console.log(error.code);
//                     switch (error.code) {
//                         case "auth/invalid-email":
//                             errMsg.value = "Invalid email";
//                             break;
//                         case "auth/user-not-found":
//                             errMsg.value = "User not found";
//                             break;
//                         case "auth/wrong-password":
//                             errMsg.value = "Incorrect password";
//                             break;
//                         default:
//                             errMsg.value = "Incorrect Email or password ";
//                             break;
//                     }
//                 })
//         };

//         const signinWithGoogle = () => {

//         };
//         return { signin, signinWithGoogle };
//     }
// };
</script>
<template>
    <div class="form-wrapper">
        <!-- <p v-if="errMsg" style="color: red;">{{ errMsg }}</p> -->

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

            <button type="submit" :disabled="loading" class="submit">
                <template v-if="!loading">
                    Sign In
                </template>
                <template v-else>
                    <svg version="1.1" class="loading-svg" id="L4" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 100"
                        xml:space="preserve">
                        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1">
                            </animate>
                        </circle>
                        <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
                            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2">
                            </animate>
                        </circle>
                        <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
                            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3">
                            </animate>
                        </circle>
                    </svg>
                </template>
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
<script>
import { ref } from "vue";
import { signInWithEmail, signInWithGoogle } from "../../firebase/config";
import router from "../../router";
import { usePush } from 'notivue';

export default {
    name: "Sign In",
    setup() {
        const email = ref("");
        const password = ref("");
        const errMsg = ref();
        const loading = ref(false);
        const push = usePush();

        const signIn = async () => {
            try {
                loading.value = true;

                await signInWithEmail(email.value, password.value);
                // alert("Successfully logged-in ")
                // console.log("Successfully logged-in ");
                push.success({
                    message: `Signed Up successfully.`,
                    duration: 4000,
                })
                setTimeout(() => {
                    router.push("/feed");
                }, 3000);
            } catch (error) {
                // alert(error.message)
                // console.log(error.code);
                switch (error.code) {
                    case "auth/invalid-email":
                        errMsg.value = "Invalid email";
                        break;
                    case "auth/claims-too-large":
                        errMsg.value = "Try again after 4min";
                        break;
                    case "auth/user-not-found":
                        errMsg.value = "User Not Found";
                        break;
                    case "auth/wrong-password":
                        errMsg.value = "Wrong password";
                        break;
                    case "auth/weak-password":
                        errMsg.value = "Invalid Password Lenght";
                        break;
                    case "auth/network-request-failed":
                        errMsg.value = "Internet Error";
                        break;
                    default:
                        errMsg.value = "internal-error";
                        break;
                }
                push.error({
                    message: `${errMsg.value}`,
                    duration: 4000,
                })
            } finally {
                loading.value = false;
            }
        };

        const signupWithGoogle = async () => {
            try {
                await signInWithGoogle();
                push.success({
                    message: `Signed Up successfully.`,
                    duration: 3000,
                })
                setTimeout(() => {
                    router.push("/feed");
                }, 3000);
            } catch (error) {
                push.error({
                    message: `Something went wrong. Please try again later.`,
                    duration: 4000,
                })
            }
        };

        return { email, password, errMsg,push, loading, signIn, signupWithGoogle };
    }
};
</script>
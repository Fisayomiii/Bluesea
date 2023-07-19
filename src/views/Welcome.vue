<template>
    <div class="page-container">
        <div class="wrapper">
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
            <div><span class="dot"></span></div>
        </div>
        <div class="right-column column">

            <div class="right-content-wrapper higher-spacing">
                <Errortoast v-if="showToast" />
                <TransitionGroup tag="div" name="form" class="header">
                    <p>Start for free</p>
                    <h3>{{ loginMode ? "Register" : "Continue" }} to Bluesea.</h3>
                </TransitionGroup>

                <TransitionGroup tag="div" name="form">
                    <Signupform :triggertoast="triggertoast" v-if="loginMode" />
                    <Loginform v-else />
                </TransitionGroup>


                <TransitionGroup tag="div" name="form" class="footer">
                    <p>{{ loginMode ? "Have an account already?" : "Don't have an account yet?" }}
                        <span v-on:click="toggleMode" class="mode-switcher">{{ loginMode ? "Sign In" : "Sign up" }}</span>
                    </p>
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Signupform from "../components/forms/SignupComponent.vue";
import Loginform from "../components/forms/LoginComponent.vue";
import Succestoast from "../components/UI/SuccessToast.vue";
import Errortoast from "../components/UI/ErrorToast.vue";
export default {
    components: { Signupform, Loginform, Succestoast, Errortoast },
    name: "Welcome",
    setup() {
        const loginMode = ref(true);
        const showToast = ref(false);

        const toggleMode = () => {
            loginMode.value = !loginMode.value;
        };

        const triggertoast = () => {
            showToast.value = true;
            setTimeout(() => showToast.value = false, 4000)
        };

        return { loginMode, toggleMode, showToast, triggertoast };
    },
};
</script>

<style>
.form-enter-from,
.form-leave-to {
    opacity: 0;
}

.form-enter-to,
.form-leave-from {
    opacity: 1;
}

.form-enter-active {
    transition: .5s all;
}

.form-leave-active {
    transition: .5s all;
    position: absolute;
}

.form-move {
    transition: .5s all;
}

/* bubbules */
.wrapper {
    height: 200%;
    width: 100%;
    background: linear-gradient(180deg, #04fafd, 5%, #119dff, 50%, #030423);
    position: absolute;
}

.wrapper div {
    height: 60px;
    width: 60px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    position: absolute;
    top: 10%;
    left: 10%;
    animation: 4s linear infinite;
}

div .dot {
    height: 10px;
    width: 10px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 20%;
    right: 20%;
}

.wrapper div:nth-child(1) {
    top: 20%;
    left: 20%;
    animation: animate 8s linear infinite;
}

.wrapper div:nth-child(2) {
    top: 60%;
    left: 80%;
    animation: animate 10s linear infinite;
}

.wrapper div:nth-child(3) {
    top: 40%;
    left: 40%;
    animation: animate 3s linear infinite;
}

.wrapper div:nth-child(4) {
    top: 66%;
    left: 30%;
    animation: animate 7s linear infinite;
}

.wrapper div:nth-child(5) {
    top: 90%;
    left: 10%;
    animation: animate 9s linear infinite;
}

.wrapper div:nth-child(6) {
    top: 30%;
    left: 60%;
    animation: animate 5s linear infinite;
}

.wrapper div:nth-child(7) {
    top: 70%;
    left: 20%;
    animation: animate 8s linear infinite;
}

.wrapper div:nth-child(8) {
    top: 75%;
    left: 60%;
    animation: animate 10s linear infinite;
}

.wrapper div:nth-child(9) {
    top: 50%;
    left: 50%;
    animation: animate 6s linear infinite;
}

.wrapper div:nth-child(10) {
    top: 45%;
    left: 20%;
    animation: animate 10s linear infinite;
}

.wrapper div:nth-child(11) {
    top: 10%;
    left: 50%;
    animation: animate 9s linear infinite;
}

@keyframes animate {
    0% {
        transform: scale(0) translateY(0) rotate(70deg);
    }

    100% {
        transform: scale(1.1) translateY(-50px) rotate(360deg);
    }
}

.page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* width: 100vw; */
    /* overflow: hidden; */
}

.page-container .column {
    flex: 0 0 50%;
    max-width: 50%;
}

@media screen and (max-width: 992px) {
    .page-container .column {
        flex: 0 0 100%;
        max-width: 100%
    }

    .page-container .right-column .right-content-wrapper {
        max-width: 400px;
    }
}

.page-container .right-column {
    position: relative;
    overflow: hidden;
    padding: 35px;
}

.page-container .right-column .right-content-wrapper {
    max-width: 500px;
    width: 100%;
    margin: 170px auto 0;
}

.page-container .right-column .right-content-wrapper .header {
    margin-bottom: 30px;
}

.page-container .right-column .right-content-wrapper .header h3 {
    margin: 10px 0;
    color: var(--white);
    font-size: 17px;
    font-weight: 700;
}

@media screen and (max-width: 380px) {
    .page-container .right-column .right-content-wrapper .header h3 {
        font-size: 24px;
    }
}

.page-container .right-column .right-content-wrapper .header p {
    font-size: 15px;
}

/* form */
.auth-form {
    max-width: 100%;
    width: 100%;
}

.auth-form .form-control {
    margin-bottom: 20px;
    position: relative;
}

.auth-form .form-control .icon {
    position: absolute;
    color: #999;
    font-size: 20px;
    bottom: 17px;
    right: 15px
}

.auth-form .form-control label {
    margin: 0 0 8px;
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.auth-form .form-control input {
    width: 100%;
    padding: 18px 50px 18px 14px;
    font: inherit;
    border-radius: 6px;
    border: 1px solid var(--border);
    outline: none;
    color: var(--dark);
}

.auth-form .submit {
    width: 100%;
    height: 60px;
    padding: 0;
    background: var(--blue1);
    color: var(--white);
    font-weight: 800;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.auth-form .submit:hover {
    opacity: 90%;
}

button {
    border: none;
    font: inherit;
    cursor: pointer;
}

button,
button:focus {
    outline: none;
}

.google-login {
    display: block;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    background: var(--border);
    border: 1px solid var(--border);
    color: var(--white);
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s all;
}

.google-login:hover {
    background: rgba(255, 255, 255, 0.1);
}

.google-login .icon {
    padding-right: 10px;
    font-size: 24px;
    line-height: 0;
    color: var(--blue1);
}

.footer p {
    color: #b3b3b3;
    font-size: 15px;
    text-align: center;
}

.mode-switcher {
    cursor: pointer;
    background-color: transparent;
    color: var(--blue1);
    transition: 0.5s all;
}

.mode-switcher:hover {
    color: var(--blue);
}
</style>
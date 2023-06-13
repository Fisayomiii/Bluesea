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
                <!-- <Succestoast v-if="showToast" /> -->
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
                        <span @click="toggleMode" class="mode-switcher">{{ loginMode ? "Sign In" : "Sign up" }}</span>
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
</style>
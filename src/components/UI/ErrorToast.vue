<template>
    <transition appear @enter="enter">
        <div class="toast-wrapper">
            <div class="toast">
                <div class="icon">
                    <ion-icon name="close"></ion-icon>
                </div>
                {{ errorMessage }}
            </div>
        </div>
    </transition>
</template>

<script>
import gsap from "gsap";

export default {
    props: {
        errorMessage: String, 
    },
    setup() {
        const enter = (el) => {
            gsap.to(el, {
                opacity: 1,
                y: "25px",
                duration: 0.6,
                ease: 'power3.out',
            });
        };

        return { enter };
    },
};
</script>


<style scoped>
.toast-wrapper {
    position: fixed;
    top: 5%;
    right: 25%;
    z-index: 100;
}

.toast {
    font-size: small;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: var(--dark);
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    /* max-width: 500px; */
    /* margin: 0 auto; */
}

.icon {
    border-radius: 100%;
    height: 1.8em;
    width: 2em;
}

.icon ion-icon {
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: var(--pink);
    border-radius: 100px;
}
</style>
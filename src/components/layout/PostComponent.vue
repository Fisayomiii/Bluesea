<template>
    <div class="home">
        <h1>Bluesea.</h1>
        <img src="../../assets/Favico.png" alt="Bluesky" height="30">
    </div>

    <div class="post-tweet">
        <form action="">
            <div class="form-group-1" v-if="user">
                <img :src="user.photoURL ? user.photoURL : 'https://img.freepik.com/free-icon/user_318-864851.jpg?size=626&ext=jpg&ga=GA1.2.1799081320.1690726741&semt=ais'" :alt="user.displayName ? user.displayName : 'Google User'"
                    :title="user.displayName" />
                <textarea placeholder="Say your mind..."></textarea>
            </div>
            <div v-else>
                <p>User not logged in.</p>
            </div>
            <div class="form-group-2">
                <div class="post-icons">
                    <ion-icon name="mic-outline" title="Use Mic"></ion-icon>
                    <ion-icon name="image-outline" title="Add Image"></ion-icon>
                    <ion-icon name="happy-outline" title="Use Emojis"></ion-icon>
                </div>
                <button class="btn" type="submit">Flow</button>
            </div>
        </form>

    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const user = computed(() => store.getters.user);

        return { user };
    },
};
</script>
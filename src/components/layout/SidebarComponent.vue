<template>
    <!-- Sidebar -->
    <aside class="sidebar__sidebar">
        <div class="left-flex-container flex-item">
            <div className="sidebar_section">
                <ul className="ul">
                    <li>
                        <a href="/" className="active">
                            <ion-icon class="list-icon" name="home-outline"></ion-icon>
                            <span> Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <ion-icon class="list-icon" name="person-outline"></ion-icon>
                            <span> Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <ion-icon name="bookmarks-outline"></ion-icon>
                            <span> Bookmark</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <ion-icon name="cog-outline"></ion-icon>
                            <span> Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <ion-icon name="grid-outline"></ion-icon>
                            <span> More</span>
                        </a>
                    </li>
                </ul>
                <button v-on:click="isModalOpen = true" >
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <ion-icon name="boat-outline"></ion-icon>
                        </div>
                    </div>
                    <span>Flow</span>
                </button>

            </div>
            <Teleport to="#modal">
                <PostModal v-if="isModalOpen" :modalOpen="isModalOpen"/>
            </Teleport>
        </div>

    </aside>
</template>

<script>
import { ref } from "vue";
import PostModal from "../modal/PostModal.vue";
export default {
    components: { PostModal },
    setup() {
        const isModalOpen = ref(false);

        return { isModalOpen };
    },
};
</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    scale: .6;
}

.modal-enter-to,
.modal-leave-from {
    opacity: 1;
    scale: 1.1;
}

.modal-enter-active,
.modal-leave-active {
    transition: .5s all;
}
</style>
<template>
    <div class="sidebar">
        <LeftSidebar />
        <main class="sidebar__main">
            <Post />
            <Posts />
            <Bottommenu />
        </main>
        <HiddensidebarComponent />
    </div>
</template>

<script>
import LeftSidebar from "../components/layout/SidebarComponent.vue";
import Post from "../components/layout/PostComponent.vue";
import Posts from "../components/layout/PostsComponent.vue";
import Bottommenu from "../components/layout/BottommenuComponent.vue";
import HiddensidebarComponent from "../components/layout/HiddensidebarComponent.vue";
export default {
    components: { LeftSidebar, Post, Posts, Bottommenu, HiddensidebarComponent },
    name: "Welcome",
    setup() {

        return {};
    },
};
</script>
<template>
    <div class="sidebar">
        <LeftSidebar />
        <main class="sidebar__main">
            <Post />
            <!-- <Posts /> -->
            <Bottommenu />
        </main>
        <HiddensidebarComponent />
    </div>

    <!-- <PostModal /> -->
</template>

<script>
import LeftSidebar from "../components/layout/SidebarComponent.vue";
import Post from "../components/layout/PostComponent.vue";
import Posts from "../components/layout/PostsComponent.vue";
import Bottommenu from "../components/layout/BottommenuComponent.vue";
import HiddensidebarComponent from "../components/layout/HiddensidebarComponent.vue";
import PostModal from "../components/modal/PostModal.vue";
export default {
    components: { LeftSidebar, Post, Posts, Bottommenu, HiddensidebarComponent, PostModal },
    name: "Home || Bluesea",
    setup() {
        return {};
    },
};
</script>

<style>
.sidebar {
    max-width: 1350px;
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}

.sidebar__sidebar {
    width: 25%;
    /* height: 500vh; */
    border-right: 1px solid var(--border);
}

.left-flex-container {
    flex: 1 0 22%;
    position: sticky;
    top: 15%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.sidebar__main {
    flex: 3 0 25%;
    border-right: 1px solid var(--border);
    /* overflow: auto; */
}

.right-flex-container {
    visibility: hidden;
    padding-top: 3em;
    height: 105vh;
    width: 80%;
    position: sticky;
    top: 10%;
    display: flex;
    align-items: center;
    flex: 2 0 21%;
    flex-flow: column nowrap;
}

.sidebar_section {
    list-style-type: none;
    display: flex;
    margin-left: 5em;
    flex-direction: column;
    justify-content: center;
}

.sidebar_section ul li a {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    margin: 25px 5px 0;
    color: var(--white);
    text-decoration: none;
    transition: 0.3s all;
}

.sidebar_section ul li span {
    font-size: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
}

.sidebar_section ul li a:hover {
    color: var(--blue);
}

button {
    margin-top: 1em;
    font-family: inherit;
    font-size: 15px;
    background: var(--blue1);
    color: var(--white);
    padding: 0.4em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 50px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s;
}

button span {
    display: block;
    margin-left: 0.8em;
    transition: all 0.3s ease-in-out;
}

button ion-icon {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover ion-icon {
    transform: translateX(2.3em) scale(1.1);
}

button:hover span {
    transform: translateX(5em);
}

/* button:active {
    transform: scale(0.95);
} */

@keyframes fly-1 {
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
}

.profile-box {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-left: 4em;
    align-self: center;
    padding: 0 0.6rem;
}

.profile-box:hover {
    background: var(--dark);
    border-radius: 25px;
    cursor: pointer;
}

.profile-box img {
    display: block;
    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 100%;
    margin-right: 0.5rem;
}

.profile-box .full-name {
    color: var(--white);
    font-weight: 600;
    font-size: 1.1rem;
}

/* center */
.home {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    border-bottom: 1px solid var(--border);
    padding: 0.5rem 1rem;
    backdrop-filter: blur(5px);
}

.home,
h1 {
    color: var(--white);
    font-size: 1em;
}

/* Create Tweet box */
.post-tweet {
    background-color: transparent;
    border-bottom: 2px solid var(--border);
}

.form-group-1 {
    display: flex;
    flex-flow: row;
    padding: 0.3rem 1rem;
}

.post-tweet img {
    display: inline-block;
    margin-right: 5px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    align-self: center;
}

.post-tweet textarea {
    background-color: transparent;
    color: var(--white);
    width: 90%;
    height: 85px;
    padding: 1rem 1rem;
    border: none;
    font-size: .9rem;
    font-weight: 300;
}

.post-tweet textarea::placeholder {
    color: rgba(123, 124, 126, 0.719);
}

.post-tweet textarea:focus {
    outline: none;
}

.form-group-2 {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.8rem;
}

.post-icons {
    padding-left: 4rem;
    color: var(--blue);
}

.post-icons ion-icon {
    padding-right: 10px;
    font-size: 1.4rem;
    transition: 0.5s all;
}

.post-icons ion-icon:hover {
    color: var(--blue);
    cursor: pointer;
}

.form-group-2 .btn {
    border: none;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.7rem 1rem;
    background: var(--blue1);
    color: var(--white);
    border-radius: 25px;
    margin-right: 1rem;
    transition: 0.5s all;
}

.form-group-2 .btn:hover {
    background: var(--blue);
    cursor: pointer;
}

.btn:focus {
    outline: none;
}

/* User Content */
.tweets img {
    display: block;
    width: 100%;
}

.tweets .user-pics img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0.5rem 1rem;
    cursor: pointer;
}

.tweets {
    display: flex;
    flex-flow: row;
    /* justify-content: center; */
    font-size: 15px;
    width: 100%;
    line-height: 1.75rem;
    padding-top: 0.5rem;
    border-bottom: 1px solid var(--border);
}

.tweets:hover {
  background: var(--border);
}

.full-name:hover {
    cursor: pointer;
    text-decoration: underline;
}

.user-content img {
    border-radius: 20px;
}

.user-content {
    padding-right: 1rem;
    color: var(--white);
    font-weight: 400;
    line-height: 1.5;
    font-size: smaller;
}

.user-content a {
    color: var(--blue1);
}

.user-content-box {
    display: flex;
    flex-flow: column nowrap;
}

.user-content-box .user-names {
    display: flex;
    flex-flow: row nowrap;
}

.user-names .full-name {
    padding-right: 10px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
}

.user-names .user-name {
    padding-right: 10px;
    font-size: .9rem;
    font-weight: 400;
    color: var(--blue);
}

.user-content img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: 10;
    max-height: 400px;
}

.time {
    font-size: smaller;
    color: var(--dark1);
}

.bottom-row {
    max-width: 50px;
    margin-top: 12px;
    padding-bottom: 1em;
    justify-content: space-between;
}

.bottom-row,
.bottom-row div {
    display: flex;
    align-items: center;
    color: var(--dark1);
    cursor: pointer;
}

.bottom-row , .comment-div , .like-div{
    transition: 0.5s all;
}

.bottom-row , .comment-div:hover{
    color: var(--blue);
}

.bottom-row , .like-div:hover{
    color: var(--pink);
}

.noPosts{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.noPosts p{
    color: var(--white);
    margin-top: 5em;
}

.bottom-menu {
    display: none;
}

@media screen and (max-width: 900px) {
    .sidebar__sidebar,
    .sidebar__right {
        display: none;
    }

    .bottom-menu {
        position: fixed;
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 0.7rem;
        background-color: var(--dark);
        outline: 1px solid var(--border);
        /* backdrop-filter: blur(100px); */
        z-index: 100;
        bottom: 0;
        display: flex;
        justify-content: space-evenly;
        /* border-top-left-radius: 10px;
    border-top-right-radius: 10px; */
    }

    .bottom-menu .route a ion-icon {
        color: var(--white);
        font-size: larger;
        transition: 0.5s all;
    }

    .bottom-menu .route a ion-icon:hover {
        color: var(--blue1);
    }
}
</style>
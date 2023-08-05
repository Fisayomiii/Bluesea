<template>
    <transition name="switch" mode="out-in">
        <div v-if="posts.length > 0">
            <transition-group tag="div" name="list" appear>
                <div class="tweets" v-for="post in posts" :key="post.id">

                    <div class="user-pics">
                        <img :src="post.userPhotoURL" :alt="post.userName" />
                    </div>

                    <div class="user-content-box">
                        <div class="usernameanddel">
                            <div class="user-names">
                                <p class="user-name">@{{ extractFirstName(post.userName) }}</p>
                                <p class="time">{{ formatPostDate(post.createdAt) }}</p>

                            </div>
                            <div class="del">
                                <span class="bin"><ion-icon name="trash-bin-outline"></ion-icon></span>
                            </div>
                        </div>

                        <div class="user-content">
                            <p>{{ post.content }}</p>
                        </div>
                        <div class="bottom-row">
                            <div class="comment-div">
                                <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                            </div>
                            <div class="like-div">
                                <ion-icon name="heart-outline" title="Like"></ion-icon>
                            </div>
                        </div>
                    </div>

                </div>
            </transition-group>
        </div>
        <div class="noPosts" v-else>
            <p>No posts available yet...</p>
        </div>
    </transition>
</template>

<script>
// import { computed } from "vue";
import { useStore } from "vuex";
// import { ref, reactive } from "vue";
import { formatDistanceToNow } from "date-fns";

export default {
    props: ["posts"],
    setup(props) {
        const store = useStore();

        // Function to extract the first name from the full name
        const extractFirstName = (fullName) => {
            if (!fullName) return "";
            return fullName.split(" ")[0];
        };

        // Function to format the post's timestamp using date-fns
        const formatPostDate = (timestamp) => {
            return formatDistanceToNow(new Date(timestamp), {
                addSuffix: true,
            });
        };

        return {
            extractFirstName,
            formatPostDate,
        };
    },
};
</script>

<style>
.delete {
    background: none;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    font: inherit;
    outline: none;
}

/* list transitions */
.list-enter-from {
    opacity: 0;
    transform: scale(0.6);
}

.list-enter-active {
    transition: all 0.4s ease;
}

.list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}

.list-leave-active {
    transition: all 0.4s ease;
    position: absolute;
    /* for move transition after item leaves */
}

.list-move {
    transition: all 0.3s ease;
}

/* switch transitions */
.switch-enter-from,
.switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.switch-enter-active {
    transition: all 0.5s ease;
}

.switch-leave-active {
    transition: all 0.5s ease;
    position: absolute;
    width: 100%;
}
</style>
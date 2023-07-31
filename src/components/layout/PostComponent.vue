<template>
    <div class="home">
        <h1>Bluesea.</h1>
        <img src="../../assets/Favico.png" alt="Bluesky" height="30">
    </div>

    <div class="post-tweet">
        <div class="form-group-1" v-if="user">
            <img :src="user.photoURL ? user.photoURL : 'https://img.freepik.com/free-icon/user_318-864851.jpg?size=626&ext=jpg&ga=GA1.2.1799081320.1690726741&semt=ais'"
                :alt="user.displayName ? user.displayName : 'Google User'" :title="user.displayName" />
            <textarea v-model="postContent" placeholder="Say your mind..."></textarea>
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
            <button class="btn" v-on:click="uploadPost">Flow</button>
        </div>
    </div>

    <!-- Display the uploaded posts -->
    <div v-if="posts.length > 0">
        <div class="tweets" v-for="post in posts" :key="post.id">
            <div class="user-pics">
                <img :src="post.userPhotoURL" :alt="post.userName">
            </div>
            <div class="user-content-box">
                <div class="user-names">
                    <!-- <h1 class="full-name">{{ post.userName }}</h1> -->
                    <p class="user-name">@{{ extractFirstName(post.userName) }}</p>
                    <p class="time">{{ formatPostDate(post.createdAt) }}</p>
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
    </div>

    <div class="noPosts" v-else>
        <p>No posts available.</p>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref, reactive, onMounted } from "vue";
import { addPost, getAllPosts } from "../../firebase/post"; // Replace with the correct path to post.js
import { formatDistanceToNow } from "date-fns"; // Import the date-fns function

export default {
    setup() {
        const store = useStore();
        const user = computed(() => store.getters.user);
        const postContent = ref("");
        const posts = reactive([]);

        // Load all posts from Firestore when the component is mounted
        onMounted(async () => {
            try {
                const allPosts = await getAllPosts();
                posts.push(...allPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        });

        const uploadPost = async () => {
            try {
                const user = store.getters.user;
                if (!user) {
                    console.error("User not logged in.");
                    return;
                }
                // Add the new post to Firestore
                const newPost = await addPost(
                    postContent.value,
                    user.uid,
                    user.displayName,
                    user.photoURL
                );
                posts.unshift(newPost); // Add the new post to the beginning of the posts array for immediate display
                postContent.value = ""; // Clear the input field after uploading
            } catch (error) {
                console.error("Error uploading post:", error);
            }
        };

        // Function to extract the first name from the full name
        const extractFirstName = (fullName) => {
            if (!fullName) return ""; // Return empty string if fullName is not provided
            return fullName.split(" ")[0]; // Split by space and return the first element (first name)
        };

        // Function to format the post's timestamp using date-fns
        const formatPostDate = (timestamp) => {
            return formatDistanceToNow(new Date(timestamp), {
                addSuffix: true,
            });
        };



        return {
            postContent,
            posts,
            uploadPost,
            formatPostDate,
            user,
            extractFirstName,
        };
    },
};
</script>

  
<!-- <template>
    <div class="tweets">

        <div class="user-pics">
            <img src="https://pbs.twimg.com/profile_images/1653040146562916352/a6m-lOWn_400x400.jpg" alt="user">
        </div>
        <div class="user-content-box">
            <div class="user-names">
                <hi class="full-name">Fisayomi</hi>
                <p class="user-name">@IFisayo</p>
                <p class="time">1 Hour Ago</p>
            </div>

            <div class="user-content">
                <p>Just setting up my Twttr</p>
            </div>

            <div class="bottom-row">
                <div class="comment-div">
                    <ion-icon name="document-text-outline" title="Comment"></ion-icon>
                </div>
                <div class="like-div">
                    <ion-icon name="heart-outline" title="Like"> </ion-icon>
                </div>
            </div>
        </div>
        
    </div>
</template> -->


<template>
  <div>
    <!-- Form to enable users to upload a post -->
    <textarea v-model="postContent" placeholder="Write your post here..."></textarea>
    <button @click="uploadPost">Upload Post</button>

    <!-- // Display the uploaded posts -->
    <div v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <h3>{{ post.userName }}</h3>
        <p>Posted {{ formatPostDate(post.createdAt) }}</p>
        <img :src="post.userPhotoURL" :alt="post.userName" />
        <p>{{ post.content }}</p>
        <hr />
      </div>
    </div>
    <div v-else>
      <p>No posts available.</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { addPost, getAllPosts } from "../../firebase/post"; // Replace with the correct path to post.js
import { useStore } from "vuex";
import { formatDistanceToNow } from "date-fns"; // Import the date-fns function

export default {
  setup() {
    const store = useStore();
    const postContent = ref("");
    const posts = reactive([]);

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

    // Function to format the post's timestamp using date-fns
    const formatPostDate = (timestamp) => {
      return formatDistanceToNow(new Date(timestamp), {
        addSuffix: true,
      });
    };

    // Load all posts from Firestore when the component is mounted
    onMounted(async () => {
      try {
        const allPosts = await getAllPosts();
        posts.push(...allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    });

    return {
      postContent,
      posts,
      uploadPost,
      formatPostDate,
    };
  },
};
</script>

  
  
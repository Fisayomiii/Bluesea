<template>
	<div class="home">
		<h1>Bluesea.</h1>
		<img src="../../assets/Favico.png" alt="Bluesky" height="30">
	</div>

	<InputErrorToast v-if="showErrorToast" />
	<SuccesfullyUploadedToast v-if="showSucessToast" />

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

			<button class="btn" v-on:click="uploadPost" :disabled="loading">
				<template v-if="!loading">
					Flow
				</template>
				<template v-else>
					<svg version="1.1" class="loading-svg" id="L4" xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 100"
						xml:space="preserve">
						<circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
							<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1">
							</animate>
						</circle>
						<circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
							<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2">
							</animate>
						</circle>
						<circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
							<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3">
							</animate>
						</circle>
					</svg>
				</template>
			</button>
		</div>
	</div>

	<!-- Instead of the transformed part, you now use the PostsComponent -->
	<PostsComponent :posts="posts" />

	<!-- <div class="noPosts" v-else>
		<p>No posts available.</p>
	</div> -->
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref, reactive, onMounted } from "vue";
import { addPost, getAllPosts } from "../../firebase/post"; // Replace with the correct path to post.js
// import { formatDistanceToNow } from "date-fns";
import PostsComponent from './PostsComponents.vue';
import InputErrorToast from "../../components/UI/InputErrorToast.vue";
import SuccesfullyUploadedToast from "../UI/SuccesfullyUploadedToast.vue";

export default {
	components: { InputErrorToast, SuccesfullyUploadedToast, PostsComponent },
	setup() {
		const store = useStore();
		const user = computed(() => store.getters.user);
		const postContent = ref("");
		const posts = reactive([]);
		const showErrorToast = ref(false);
		const showSucessToast = ref(false);
		const loading = ref(false);

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
			if (!postContent.value.trim()) {
				// Check if postContent is empty or contains only whitespace characters
				navigator.vibrate(700);
				showErrorToast.value = true;
				setTimeout(() => showErrorToast.value = false, 4000)
				return;
			} else {
				try {
					loading.value = true;
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
					showSucessToast.value = true;
					setTimeout(() => showSucessToast.value = false, 4000)
					postContent.value = ""; // Clear the input field after uploading
				} catch (error) {
					console.error("Error uploading post:", error);
				} finally {
					loading.value = false;
				}
			}
		};

		return {
			postContent,
			posts,
			uploadPost,
			user,
			showErrorToast,
			showSucessToast,
			loading,
		};
	},
};
</script>


<style>
.loading-svg {
	width: 50px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
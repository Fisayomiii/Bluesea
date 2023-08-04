<template>
  <div>
    <div v-if="posts.length > 0">
      <div class="tweets" v-for="post in posts" :key="post.id">

        <div class="user-pics">
          <img :src="post.userPhotoURL" :alt="post.userName" />
        </div>
        <div class="user-content-box">
          <div class="user-names">
            <p class="user-name">@{{ extractFirstName(post.userName) }}</p>
            <p class="time">{{ formatPostDate(post.createdAt) }}</p>
        <!-- <button class="delete"><ion-icon name="heart-outline" title="Like"></ion-icon></button> -->

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
      <p>No posts available yet...</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { ref, reactive } from "vue";
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

<style scoped>
.delete {
  background: none;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  font: inherit;
  outline: none;
  /* position: absolute;
  right: -20%;
  top: -35%; */
}
</style>
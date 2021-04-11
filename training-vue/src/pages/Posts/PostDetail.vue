<template>
  <v-app>
    <SidesBar />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <h3>Post {{ $route.params.id }}</h3>
        <br />
        <form>
          <v-text-field label="Title" required v-model="post.title"
            >Title</v-text-field
          >
          <v-text-field label="Username" required v-model="post.body"
            >Body</v-text-field
          >
          <v-btn class="mr-4" color="success" @click="update(post)">
            Update
          </v-btn>
          <v-btn class="mr-4" color="error" @click="deleteUserById(post.id)">
            Delete
          </v-btn>
        </form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import SidesBar from "../SidesBar.vue";

export default {
  components: { SidesBar },
  name: "PostDetail",
  props: {
    dataDetail: Object,
  },
  data: () => ({
    id: this.$route.params.id,
  }),

  computed: {
    ...mapState({
      post: (state) => state.posts.post,
    }),
  },

  created() {
    this.getPostDetail();
  },

  methods: {
    getPostDetail(key) {
      this.$router.push({
        path: "/posts",
        query: { id: key },
      });
      this.$store.dispatch("posts/getPostDetail", key);
    },

    update(post) {
      this.$confirm("Do you really want to update?")
        .then(() => {
          this.$store
            .dispatch("post/updatePost", post)
            .then((res) => {
              if (res) {
                this.$alert("Update successfully");
                this.router.push("/posts");
              } else this.$alert("Update Failed");
            })
            .catch((err) => {
              throw err;
            });
        })
        .catch((err) => {
          throw err;
        });
    },

    deleteUserById(post) {
      this.$confirm("Do you really want to delete?")
        .then(() => {
          this.$store
            .dispatch("posts/deletePost", post)
            .then((res) => {
              if (res) {
                this.$alert("Delete successfully");
                this.router.push("/posts");
              } else this.$alert("Delete Failed");
            })
            .catch((err) => {
              throw err;
            });
        })
        .catch((err) => {
          throw err;
        });
    },
  },
};
</script>

<template>
    <v-app>
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
                </form>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PostDetail",
  props: {
      dataDetail: Object
  },
  data: () => ({
    id: this.$route.params.id,
    drawer: null,
    links: [
      ["mdi-account-group", "Users", "/users"],
      ["mdi-post", "Posts", "/posts"],
    ]
  }),

  computed: {
    ...mapState({
      post: state => state.posts.post
    })
  },

  created() {
    this.getPostDetail()
  },

  methods: {
    router(path){
        this.$router.push(path)
    },

    getPostDetail(key) {
      this.$router.push({
        path: '/posts',
        query: {id : key}
      })
      this.$store.dispatch('posts/getPostDetail', key)
    }
  },
};
</script>
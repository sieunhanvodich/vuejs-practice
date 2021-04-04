<template>
    <v-app>
        <v-main>
            <v-container class="py-8 px-6" fluid>
                <h3>Post {{}}</h3>
                <br />           
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-text-field
                                v-model="first"
                                label="First Name"
                                filled
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Post Detail",
  props: {
      dataDetail: Object
  },
  data: () => ({
    drawer: null,
    links: [
      ["mdi-account-group", "Users", "/users"],
      ["mdi-post", "Posts", "/posts"],
    ]
  }),

  computed: {
    ...mapState({
      postsList: state => state.posts.postsList
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
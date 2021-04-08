<template>
  <v-app>  

    <SidesBar />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <h3>Posts List</h3>
        <br />
        <v-text-field
          outlined
          label="Post ID"
          clearable
          hide-details=""
          append-icon="mdi-file-find"
        ></v-text-field>

        <v-row>
          <v-col cols="12">
            <v-card>
              <v-list two-line>
                <template v-for="post in postsList">
                  <v-list-item :key="post.id">
                    <v-list-item-avatar color="grey darken-1">
                      <img src="../../assets/title.jpg" alt="title" />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ post.title }}</v-list-item-title>
                      <v-list-item-subtitle>
                        {{ post.body }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <!-- <v-btn rounded small @click="getPostDetail(post.id)">Detail</v-btn> -->
                    <v-btn rounded small :to="{name: 'postDetail', params: { id: post.id }}">Detail</v-btn>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import SidesBar from "../SidesBar.vue";

export default {
  components: { SidesBar },
  name: "Posts",
  data: 
    () => ({
   
  }),

  computed: {
    ...mapState({
      postsList: state => state.posts.postsList
    })
  },

  created() {
    this.$store.dispatch('posts/getPostsList')
  },

  methods: {
    getPostDetail(key) {
      this.$router.push({
        path: '/posts',
        query: {id : key}
      })
    }
  },
};
</script>
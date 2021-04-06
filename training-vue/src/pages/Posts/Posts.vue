<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <img src="../../assets/logo-arsenal-3.png" alt="logo-ars" />
        </v-avatar>
        <div>tabac</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text, path] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="text" @click="router(path)"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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

export default {
  name: "Posts",
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
    this.$store.dispatch('posts/getPostsList')
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
    }
  },
};
</script>
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
        <h3>User List</h3>
        <br />
        <v-text-field
          outlined
          label="User ID"
          clearable
          hide-details=""
          append-icon="mdi-account-search"
        ></v-text-field>

        <v-row>
          <v-col cols="12">
            <v-card>
              <v-list two-line>
                <template v-for="user in usersList">
                  <v-list-item :key="user.id">
                    <v-list-item-avatar color="grey darken-1">
                      <img src="../../assets/logo-arsenal-3.png" alt="logo-ars" />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ user.username }}</v-list-item-title>
                      <v-list-item-subtitle>
                        {{ user.email }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <!-- <v-btn rounded small @click="getUserDetail(user.id)">Detail</v-btn> -->
                    <v-btn rounded small :to="{name: 'userDetail', params: { id: user.id }}">Detail</v-btn>
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
  name: "Users",
  data: () => ({
    drawer: null,
    links: [
      ["mdi-account-group", "Users", "/users"],
      ["mdi-post", "Posts", "/posts"],
    ]
  }),

  computed: {
    ...mapState({
      usersList: state => state.users.usersList
    })
  },

  created() {
    this.$store.dispatch('users/getUsersList')
  },

  methods: {
    router(path){
        this.$router.push(path)
    },
    getUserDetail(key) {
      this.$router.push({
        path: '/users',
        query: {id : key}
      })
    }
  },
};
</script>
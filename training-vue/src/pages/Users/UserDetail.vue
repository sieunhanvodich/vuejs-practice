<template>
    <v-app>
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
      <v-container>
        <p>User {{ $route.params.id }}</p>
        <form>
          <v-text-field label="Full Name" required v-model="user.name"
            >Fullname</v-text-field
          >
          <v-text-field label="Username" required v-model="user.username"
            >Username</v-text-field
          >
          <v-text-field label="E-mail" required v-model="user.email"
            >Email</v-text-field
          >
          <v-text-field label="Street" required v-model="user.address.street"
            >Street</v-text-field
          >
          <v-text-field label="City" required v-model="user.address.city"
            >City</v-text-field
          >
          <v-btn class="mr-4" color="success" > Update </v-btn>
          <v-btn class="mr-4" color="error" > Delete </v-btn>
        </form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserDetail",
  data() {
    return {
      id: this.$route.params.id,
      drawer: null,
      links: [
      ["mdi-account-group", "Users", "/users"],
      ["mdi-post", "Posts", "/posts"],
    ]
    };
  },

  computed: {
    ...mapState({
      user: state => state.users.user
    })
  },

  created() {
    this.$store.dispatch('users/getUserDetail', this.id)
  },

  methods: {
      router(path){
        this.$router.push(path)
    },
  },
};
</script>
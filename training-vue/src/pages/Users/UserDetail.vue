<template>
  <v-app>
    <SidesBar />

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
import SidesBar from "../SidesBar.vue";

export default {
  components: { SidesBar },
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
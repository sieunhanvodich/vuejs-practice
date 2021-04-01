<template>
  <v-app>
    <v-main>
      <!-- <Login /> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import Login from "./components/Login";

export default {
  name: "App",

  components: {
    // Login,
  },

  data: () => ({
    //
  })
};
</script>

<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="handleLogin" ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="username"
                    prepend-icon="mdi-account"
                    name="login"
                    :rules="isLogin ? [] : usernameRules"
                    label="Username"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    prepend-icon="mdi-lock"
                    id="password"
                    :rules="isLogin ? [] : passwordRules"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit">Login</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String
  },
  data: () => ({
    username: "",
    password: "",
    usernameRules: [
      v => !!v || "Username required",
      v => v === "htdat1" || "Wrong username"
    ],
    passwordRules: [
      v => !!v || "Password required",
      v => v === "123456" || "Wrong password"
    ],
    isLogin: true
  }),

  methods: {
    handleLogin() {
      if (this.username === "htdat1" && this.password === "123456") {
        this.isLogin = true;
        this.$router.push("/users");
      } else {
        this.isLogin = false;
      }
      // this.$refs.form.validate();
      // console.log(this.$router.history.current.path);
    }
  }
};
</script>

<style></style>

<template>
    <v-navigation-drawer v-model="drawer" app>
        <v-sheet color="grey lighten-4" class="pa-4">
            <v-avatar class="mb-4" color="grey darken-1" size="64">
            <img src="../assets/logo-arsenal-3.png" alt="logo-ars" />
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
</template>

<script>

export default {
    name: "SidesBar",
    data: () => ({
        drawer: null,
        links: [
            ["mdi-account-group", "Users", "/users"],
            ["mdi-post", "Posts", "/posts"],
        ]
    }),

    methods: {
        router(path){
            this.$router.push(path)
        },
    }
}
</script>

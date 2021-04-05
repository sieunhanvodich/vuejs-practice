<template>
    <div class="app-layout">
        <el-container>
            <el-aside width="200px">
                <div id="nav">
                    <router-link to="/users">Users</router-link> |
                    <router-link to="/posts">Posts</router-link>
                </div>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>

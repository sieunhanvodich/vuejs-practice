<template>
    <el-row :gutter="20" type="flex" justify="center" align="middle">
        <el-col :span="6">
            <el-card class="login-card">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="Login" name="login">
                        <login-tab
                            ref="authForm"
                            :model="{}"
                            :rules="{ rules }"
                        />
                    </el-tab-pane>
                    <el-tab-pane label="Register" name="register">
                        <register-tab
                            ref="authForm"
                            :model="authForm"
                            :rules="rules"
                        />
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import LoginTab from '../components/LoginTab.vue';
    import RegisterTab from '../components/RegisterTab.vue';

    export default {
        name: 'Login',
        components: {
            LoginTab,
            RegisterTab,
        },
        data() {
            return {
                activeName: 'login',
            };
        },
    };
</script>

<template>
    <el-form ref="loginForm" :model="loginForm" :rules="rules">
        <el-form-item prop="email">
            <el-input v-model="loginForm.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                placeholder="Password"
                v-model="loginForm.password"
                show-password
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">Login</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'LoginTab',
        data() {
            return {
                loginForm: {
                    email: '',
                    password: '',
                },
                rules: {
                    email: [
                        {
                            required: true,
                            message: 'Please enter your email',
                            trigger: 'blur',
                        },
                    ],
                    password: [
                        {
                            required: true,
                            message: 'Please enter your password',
                            trigger: 'blur',
                        },
                    ],
                },
            };
        },
    };
</script>

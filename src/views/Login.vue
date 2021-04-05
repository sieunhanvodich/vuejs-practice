<template>
    <el-row type="flex" justify="center" align="middle">
        <el-col>
            <el-card class="login-card">
                <el-form
                    ref="loginForm"
                    :model="loginForm"
                    :rules="rules"
                    @submit.prevent=""
                >
                    <el-form-item label="Email " prop="email">
                        <el-input
                            v-model="loginForm.email"
                            placeholder="Email"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="Password " prop="password">
                        <el-input
                            placeholder="Password"
                            v-model="loginForm.password"
                            show-password
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" loading native-type="submit"
                            >Login</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'Login',
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
        methods: {},
    };
</script>

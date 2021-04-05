<template>
    <el-form ref="registerForm" :model="registerForm" :rules="rules">
        <el-form-item prop="email">
            <el-input
                v-model="registerForm.email"
                placeholder="Email"
            ></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                placeholder="Password"
                v-model="registerForm.password"
                show-password
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">Register</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'RegisterTab',
        data() {
            return {
                registerForm: {
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

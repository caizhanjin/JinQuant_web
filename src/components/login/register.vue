<template>
<div class="register_main">
    <div class="register_header">
        <span class="font_size_16">加入JinQuant</span>
        <div>创建您的帐户</div>
    </div>

    <el-form :model="data_form" ref="data_form" label-width="100px">
        <el-form-item label="用户名" prop="username" :rules="rules.username">
            <el-input type="username" v-model.number="data_form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址" prop="username" :rules="rules.username">
            <el-input type="username" v-model.number="data_form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="username" :rules="rules.username">
            <el-input type="username" v-model.number="data_form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="username" :rules="rules.username">
            <el-input type="username" v-model.number="data_form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="username">
            <el-input type="username" v-model.number="data_form.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item style="padding-top:20px">
            <el-button type="primary" @click="submitForm('data_form')">提交</el-button>
            <el-button @click="resetForm('data_form')">重置</el-button>
        </el-form-item>
    </el-form>

    <el-card shadow="never" class="circular_border margin_top_20 background_gray line_middle" style="margin-top:60px">
        <span>已有账号？</span>
        <router-link to="/login"><el-link type="primary">前往登录</el-link></router-link>
    </el-card>

</div>
</template>

<script>
export default {
    name: "register",
    data () {
        return {
            data_form: {
            username: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    created() {

    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
}
</script>

<style>
.register_main{
    height: 100%;
    padding: 5% 30% 0 30%;
}

.register_header{
    text-align: center;
}

.register_header div{
    font-size: 45px;
    padding: 5px 0 20px 0;
}

</style>

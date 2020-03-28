<template>
<div class="login_main">
    <div class="login_card" style="width:18%;min-width:280px">
        <div v-if="!is_password_reset">
            <div class="line_middle font_size_20">登录到JinQuant</div>
            <el-card shadow="never" class="circular_border margin_top_20" style="padding: 8px">
                <div>
                    <div><span>用户名/邮箱地址</span></div>
                    <el-input size="small" v-model="input" placeholder="请输入内容" class="margin_top_10"></el-input>
                </div>
                <div class="margin_top_20">
                    <div>
                        <span class="float_left">密码</span>
                        <span class="float_right">
                            <el-link @click="is_password_reset=true" type="primary">忘记密码？</el-link>
                        </span>
                    </div>
                    <el-input size="small" v-model="input" placeholder="请输入内容" class="margin_top_10"></el-input>
                </div> 
                <div class="margin_top_20">
                    <el-button type="primary" size="small" style="width:100%">登录</el-button>
                </div>
            </el-card>
        </div>
        <div v-else>
            <div class="line_middle font_size_20">重置你的密码</div>
            <el-card shadow="never" class="circular_border margin_top_20" style="padding: 8px">
                <div>
                    <div><span>输入您的邮箱地址，我们将向您发送密码重置链接。</span></div>
                    <el-input size="small" v-model="input" placeholder="输入你的邮箱地址" class="margin_top_10"></el-input>
                </div>
                <div class="margin_top_20">
                    <el-button type="primary" size="small" style="width:100%">发送重置邮件</el-button>
                </div>
            </el-card>
        </div>

        <el-card shadow="never" class="circular_border margin_top_20 background_gray line_middle">
            <div v-if="!is_password_reset">
                <span>JinQuant新用户？</span>
                <router-link to="/register"><el-link type="primary">新建账号</el-link></router-link>
            </div>
            <div v-else>
                <el-link type="primary" @click="is_password_reset=false">返回登录</el-link>
            </div>
        </el-card>
    </div>
</div>
</template>

<script>
export default {
    name: "login",
    data () {
        return {
            is_password_reset: false,
        }
    },
    created() {

    },
    methods: {
        
    }
}
</script>

<style>
.login_main{
    width: 100%;
    height: 100%;

}

.login_card{
    width: 200px;
    margin: auto;
    margin-top: 6%;
}

.login_goback{
    margin-top: 20px;
    text-align: center;
}
</style>

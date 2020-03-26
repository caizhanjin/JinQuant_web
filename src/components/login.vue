<template>
<div class="login_main">
    <div class="login_card" style="width:18%;min-width:280px">
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
                        <el-link :underline="false">忘记密码？</el-link>
                    </span>
                </div>
                <el-input size="small" v-model="input" placeholder="请输入内容" class="margin_top_10"></el-input>
            </div> 
            <div class="margin_top_20">
                <el-button type="primary" size="small" style="width:100%">登录</el-button>
            </div>
        </el-card>
        <el-card shadow="never" class="circular_border margin_top_20 background_gray line_middle">
            <div>
                <span>JinQuant新用户？</span>
                <span>
                    <el-link>新建账号</el-link>
                </span>
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
</style>

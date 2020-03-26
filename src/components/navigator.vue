<template>
<div class="navigator_main">
    <div class="navigator_left float_left navigator_background" >
        <div class="navigator_left_header navigator_header">JinQuant</div>
        <div class="navigator_left_body">
            <el-menu 
                class="navigator_left_body_menu"
                @open="handleOpen" 
                @close="handleClose" 
                :collapse="isCollapse" 
                background-color="#303133"
                text-color="#fff"
                active-text-color="#409EFF"
                :unique-opened="true"
            >
                <el-submenu index="1" show-timeout="150" hide-timeout="150">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-submenu index="1-1">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-1-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>

                <el-submenu index="2" show-timeout="150" hide-timeout="150">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航二</span>
                    </template>
                    <el-submenu index="2-1">
                        <span slot="title">选项4</span>
                        <el-menu-item index="2-1-1">选项1</el-menu-item>
                        <el-menu-item index="2-1-2">选项1</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2-2">
                        <span slot="title">选项4</span>
                        <el-menu-item index="2-2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2-2">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </div>
    </div>
    <div class="navigator_right" >
        <div class="navigator_right_header">
            <el-menu
                :default-active="activeIndex2"
                mode="horizontal"
                @select="handleSelect"
                background-color="#393d49"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-menu-item index="4"><i class="el-icon-s-fold" style=""></i></el-menu-item>
                <el-menu-item index="4" style="float:right"><i class="el-icon-more"></i></el-menu-item>
                <el-menu-item index="4" style="float:right"><i class="el-icon-full-screen"></i></el-menu-item>
                <el-menu-item index="4" style="float:right">注册</el-menu-item>
                <el-menu-item index="4" style="float:right">登录</el-menu-item>
            </el-menu>
        </div>
        <div class="navigator_right_body">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>

        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "navigator",
    data () {
        return {
            isCollapse: false,
        }
    },
    created() {

    },
    methods: {
        
    }
}
</script>

<style>
.navigator_main, .navigator_left, .navigator_right{
    height:100%;
    overflow: hidden;
}

.navigator_background{
    background: #303133;
}

.navigator_background2{
    background: #393d49;
}

.navigator_left_body .el-menu--collapse{
    height: 800px;
}

.navigator_left_header{
    line-height: 50px;
    text-align: center;
    color: #409EFF;
    font-weight: bold;
    font-size: 14px;
}

.navigator_left_header:hover{
    color: #67C23A;
	transform: rotate(360deg)scale(1.2,1.2);
	transition-duration: 1s;
}

.navigator_header{
    height:50px;
    line-height: 50px;
}

.navigator_left_body_menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 800px;
}

.navigator_left_body_menu .el-submenu .is-active{
    background: #262729 !important;
}

.navigator_left_body_menu .el-menu-item, .navigator_left_body_menu .el-submenu__title{
    height: 50px;
    line-height: 50px;
}

.navigator_right_header i{
    font-size: 20px;
    color: #fff;
}

.navigator_right_header .el-menu, .navigator_right_header .el-menu-item{
    height: 50px;
    line-height: 50px;
}


</style>

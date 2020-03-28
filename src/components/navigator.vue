<template>
<div class="navigator_main" id="content">
    <div class="navigator_left float_left navigator_background" >
        <div class="navigator_left_header navigator_header">
            <span :style="{ fontSize: (is_sollapse ? 10 : 20) + 'px' }">JinQuant</span>
        </div>
        <div class="navigator_left_body">
            <el-menu 
                class="navigator_left_body_menu"
                :collapse="is_sollapse" 
                background-color="#303133"
                text-color="#fff"
                active-text-color="#409EFF"
                :unique-opened="true"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-submenu index="1-1">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-1-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>

                <el-submenu index="2">
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
                mode="horizontal"
                background-color="#393d49"
                text-color="#fff"
                active-text-color="#fff"
            >
                <el-menu-item index="0" @click="is_sollapse=!is_sollapse">
                    <i class="el-icon-s-fold" v-if="!is_sollapse"></i>
                    <i class="el-icon-s-unfold" v-else ></i>
                </el-menu-item>
                <el-menu-item index="1"><i class="el-icon-s-home" style=""></i>首页</el-menu-item>
                <el-menu-item index="2" @click="is_show_taps=true">导航</el-menu-item>
                <el-menu-item index="3" style="float:right" @click="drawer=true"><i class="el-icon-more"></i></el-menu-item>
                <el-menu-item index="4" style="float:right">
                    <i class="el-icon-full-screen" v-if="is_full_screen" @click="exitFullscreen"></i>
                    <i class="el-icon-full-screen" v-else @click="goFullScreen"></i>
                </el-menu-item>
                <el-menu-item index="5" style="float:right">注册</el-menu-item>
                <el-menu-item index="6" style="float:right">登录</el-menu-item>
            </el-menu>
        </div>

        <div class="navigator_right_tags" id="navigator_right_tags" v-if="is_show_taps">
            <div class="navigator_right_tags_i float_left">
                <el-button icon="el-icon-arrow-left" size="mini" @click="moveTaps('right')"></el-button>
            </div>

            <div id="hr_scanll_box">
                <ul id="hr_scanll_ul">
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>  

                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>                      <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>                      <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>                      <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>
                    <li><el-tag type="info" size="small">标签三</el-tag></li>   
                </ul>
            </div>

            <div class="navigator_right_tags_i float_right">
                <el-button icon="el-icon-arrow-right" size="mini" @click="moveTaps('left')"></el-button>
                <el-button icon="el-icon-close" size="mini" @click="is_show_taps=false"></el-button>
            </div>
        </div>

        <div class="navigator_right_body">


        </div>
    </div>

    <el-drawer custom-class="navigator_drawer" :visible.sync="drawer" :with-header="false">
        <span>You got it !</span>
    </el-drawer>

</div>

</template>

<script>
export default {
    name: "navigator",
    data () {
        return {
            is_sollapse: false,
            drawer: false,
            is_full_screen: false,
            is_show_taps: true, 
        }
    },
    created() {
        

    },
    methods: {
        goFullScreen(){
            this.is_full_screen = true
        　　var element = document.getElementById("content");
        　　var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        　　if (requestMethod) {
        　　　　requestMethod.call(element);
        　　} else if (typeof window.ActiveXObject !== "undefined") {
        　　　　var wscript = new ActiveXObject("WScript.Shell");
        　　　　if (wscript !== null) {
        　　　　　　wscript.SendKeys("{F11}");
        　　　　}
        　　}
        },
        exitFullscreen(){
            this.is_full_screen = false
        　　if (document.exitFullscreen) {
        　　　　document.exitFullscreen();
        　　} else if (document.msExitFullscreen) {
        　　　　document.msExitFullscreen();
        　　} else if (document.mozCancelFullScreen) {
        　　    document.mozCancelFullScreen();
        　　} else if (document.webkitExitFullscreen) {
        　　    document.webkitExitFullscreen();
        　　}
        },
        moveTaps(direction="left", speed=200){
            var box = document.getElementById('hr_scanll_box');
            var ul_box = document.getElementById('hr_scanll_ul'); 
            var box_dom = box.getBoundingClientRect()
            var ul_box_dom = ul_box.getBoundingClientRect()
            var list = ul_box.getElementsByTagName('li')
            var total_width = 0;  
            for(let i=0;i<list.length;i++){
                total_width += (list[i].offsetWidth + 5)
            }
            var offset_left = ul_box_dom.x - box_dom.x
            var offset_right = total_width  + offset_left - box_dom.width

            if(direction == "right" && offset_right > 0){
                ul_box.style.left = (offset_left - (speed > offset_right  ? offset_right : speed)) + 'px'
            }
            if(direction == "left" && offset_left < 0){
                ul_box.style.left = (offset_left + (speed > -offset_left  ? -offset_left+10 : speed)) + 'px'
            }
        },
    }
}
</script>

<style>
.navigator_main, .navigator_left, .navigator_right{
    height:100%;
    overflow: hidden;
    background: rgb(242, 242, 242);
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

.navigator_left_body_menu i{
    color: #fff;
}

.navigator_right_header i{
    font-size: 20px;
    color: #fff;
}

.navigator_right_header .el-menu, .navigator_right_header .el-menu-item{
    height: 50px;
    line-height: 50px;
}

.navigator_right_tags{
    height: 32px;
    line-height: 31px;
    background: #fff;
    border: 2px solid #DCDFE6;
    border-radius: 4px;
    padding: 0 10px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}

#hr_scanll_box{
    display: inline-block;
    width: calc(100% - 180px);
    height: 35px;
    white-space: nowrap;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    margin: 0 10px;
}

#hr_scanll_ul{
    position: relative;
    left: 0px;
    top: 0px;
    transition: all .5s;
    height:100%;
}

#hr_scanll_ul, #hr_scanll_ul li{
    padding: 0;
    margin: 0;
}

#hr_scanll_ul li{
    display: inline-block;
}

.navigator_drawer{
    width: 20% !important;
    top: 88px !important;
    background: #f2f2f2 !important;
}


</style>

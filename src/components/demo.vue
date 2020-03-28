<template>
<div >
<div>点我
  <span  @click="goLeft2('right')">点我1</span>
  <span  @click="goLeft2('left')">点我2</span>

</div>

<div id="hr_scanll_box">
 <ul id="hr_scanll_ul">
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>  
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>  
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>  
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>  
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>  
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>  
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>  
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>  
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>  
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三</el-tag></li>
        <li><el-tag type="info">标签三2</el-tag></li>
 </ul>
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
//         goLeft2(){
//  var box = document.getElementById('hr_scanll_box'); //外面的容器。
//  var listBox = document.getElementById('hr_scanll_ul'); //ul列表。主要是移动它的left值
//  var list = listBox.getElementsByTagName('li');//所有列表元素
//  var width = box.clientWidth /2;  //为了判断是左滑还是右滑
//  var totalWidth = 0;  
//  for(let i=0;i<list.length;i++){
//    totalWidth = totalWidth + list[i].offsetWidth; //所有列表元素的总宽度
//  }
//  for(let i=0;i<list.length;i++){
//    var _offset = totalWidth - box.clientWidth; //右边的偏移量
//    list[i].addEventListener('click', function (e) {
//      for(let j=0;j<list.length;j++){
//        list[j].className = 'off';  //移除所有元素的样式
//      }
//      list[i].className = 'on';   //给点击的元素添加样式
//      var offset =totalWidth - (Math.abs(listBox.offsetLeft) + box.clientWidth) + 100; //右边的偏移量 = 所有元素宽度之和 - （ul容器的左偏移量 + 父容器的宽度）
//      if(e.pageX > width && offset > 0){  //点击右侧并且右侧的偏移量大于0，左滑。
//        listBox.style.left = (listBox.offsetLeft-200) + 'px';
//      }else if(e.pageX > width && offset > 200){ //临界位置，，右侧滚动到末尾
//        listBox.style.left = -_offset + 'px';
//      }
//      if(e.pageX < width && listBox.offsetLeft < -200) { //点击左侧并且左侧的偏移量小于0，左滑。
//        listBox.style.left = (listBox.offsetLeft + 200) + 'px';

//      }else if(e.pageX < width && listBox.offsetLeft < 0){ //临界位置，左侧滚到开始的位置
//        listBox.style.left = 0
//      }

//    });

//  }
//         },
      
      
        goLeft1(direction="left"){
          var box = document.getElementById('hr_scanll_box'); //外面的容器。
          var listBox = document.getElementById('hr_scanll_ul'); //ul列表。主要是移动它的left值
          var list = listBox.getElementsByTagName('li');//所有列表元素
          var totalWidth = 0;  
          for(let i=0;i<list.length;i++){
            totalWidth = totalWidth + list[i].offsetWidth; //所有列表元素的总宽度
          }
          var offset = totalWidth - (Math.abs(listBox.offsetLeft) + box.clientWidth); 

          if(offset > -150){
            listBox.style.left = (listBox.offsetLeft-200) + 'px';
          }


          
        },
        goLeft2(direction="left"){
          var box = document.getElementById('hr_scanll_box');
          var listBox = document.getElementById('hr_scanll_ul'); 
          var list = listBox.getElementsByTagName('li');
          var totalWidth = 0;  
          for(let i=0;i<list.length;i++){
            totalWidth = totalWidth + list[i].offsetWidth; 
          }
          var offset = totalWidth - (Math.abs(listBox.offsetLeft) + box.clientWidth)

          if(direction=="right" && listBox.offsetLeft < 0){
            listBox.style.left = (listBox.offsetLeft<200? 15 : (listBox.offsetLeft + 200)) + 'px';
          }else if(direction=="left" && offset > -150){
            listBox.style.left = (listBox.offsetLeft-200) + 'px';
          }
          
        },
    }
}
</script>

<style>

  #hr_scanll_box{
    width: 100%;
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    background: #fff;
  }
  #hr_scanll_ul{
    position: relative;
    left: 0px;
    transition: all .5s;
    height:100%;
    top: 3px;

  }
  #hr_scanll_ul, #hr_scanll_ul li{
padding: 0;
margin: 0;
  }


  #hr_scanll_ul li{
    display: inline-block;
  }
</style>

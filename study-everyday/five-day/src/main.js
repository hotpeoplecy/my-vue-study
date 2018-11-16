// 1.1 初始化文件：npm init -y   b.安装：npm i jquery -S
// 1.导入jquery
// import *** from *** 是ES6中导入模块的方式
import $ from 'jquery' 

//2.创建入口函数
$(function() {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor','lightblue');
})
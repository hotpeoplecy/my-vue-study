// 导入jquery 此时浏览器会报错，需装包
import $ from 'jquery'

// 引入外面css文件
import './css/index.css'

// 引入外部less文件
import './css/test.less'

// 引入外部的sass文件
import './css/demo.scss'

$(function () {  
    $('ul>li:odd').css('backgroundColor', 'blue')
    $('ul>li:even').css('backgroundColor', 'purple')
  })
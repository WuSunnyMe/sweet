// 引入模板
var tplGuide = require('../tpl/guide.string');

// 定义一个视图
SPA.defineView('guide', {
  html: tplGuide,

  // 添加插件
  plugins: ['delegated'],

  // 绑定事件
  bindActions: {
    'goto.index': function () {
      SPA.open('index');
      var mySwiper = new Swiper ('#index-swiper', {
	    direction: 'horizontal',
	    autoplay:1000,
	    autoplayDisableOnInteraction:false,
	    loop: true,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	  }) 
    }
  },
  bindEvents:{
  	'beforeShow':function(){
  		 var mySwiper = new Swiper('#guide-swiper',{
  		 	loop:false
  		 })
  	}
  }
});

// 引入模板
var tplFenlei = require('../tpl/fenlei.string');
// 定义一个视图


SPA.defineView('fenlei', {
  html: tplFenlei,
	plugins:['delegated'],
	init:{
		fenleiSwiper:null
	},
    bindActions:{
	  	'switch.fenlei':function(e){
			$(e.el).addClass("active").siblings().removeClass("active");
			this.fenleiSwiper.slideTo($(e.el).index());
	  	},
	  	'goto.detail':function(){
	  		console.log(1)
 	 		SPA.open('detail');
 	 		
 	 }
	  },
	  
  bindEvents: {
    'beforeShow': function () {
      this.fenleiSwiper = new Swiper('#fenlei-swiper', {
      	direction:"vertical",
        loop: false,
        onSlideChangeStart: function (swiper) {
          $('#fenlei-nav li').eq(swiper.activeIndex)
            .addClass('active').siblings().removeClass('active');
        }
      });
    }
  }
});
// 引入模板
var tplFind = require('../tpl/find.string');
// 定义一个视图
SPA.defineView('find', {
  html: tplFind,
  plugins:['delegated'],
	init:{
		findSwiper:null
	},
    bindActions:{
	  	'switch.find':function(e){
			$(e.el).addClass("active").siblings().removeClass("active");
			this.findSwiper.slideTo($(e.el).index());
	  	}
	  },
	  bindEvents: {
    'beforeShow': function () {
      this.findSwiper = new Swiper('#find-swiper', {
        loop: false,
        onSlideChangeStart: function (swiper) {
          $('#find-nav li').eq(swiper.activeIndex)
            .addClass('active').siblings().removeClass('active');
        }
      });
    }
  }
});
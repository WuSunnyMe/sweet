var tplDetail = require('../tpl/detail.string');

SPA.defineView('detail', {
  html: tplDetail,
  plugins:['delegated'],
  init:{
		detailSwiper:null
	},
  bindActions:{
  	'back':function(){
  		this.hide();
  	},
  	'goto.change':function(){
  		SPA.open('change');
  	}
  },
  bindEvents:{
  	'beforeShow': function () {
      this.detailSwiper = new Swiper('#detail-swiper', {
        loop: false,
        onSlideChangeStart: function (swiper) {
          $('.pro-nav li').eq(swiper.activeIndex)
            .addClass('active').siblings().removeClass('active');
        }
      });
    }
  }
});



var tplHome = require('../tpl/home.string');
var Swiper = require("../lib/swiper-3.3.1.min.js");
// 定义一个视图
SPA.defineView('home', {
  html: tplHome,
  
   plugins: ['delegated', {
    name: 'avalon',
    options: function(vm) {
      vm.getHot = [];
    }
  }],
  bindEVENTS:{
  	'show':function(){
  		var vm = this.getVM();//获得vm对象
  		$.ajax({
  			url:'/\/api\/getHot.php',
  			success:function(res){
  				var data = res.data;
          var tempArr = [];
          for (var i = 0; i < Math.ceil(data.length); i++) {
            tempArr[i] = data[i];
          }
          vm.getHot = tempArr;
  			}
  		})
  	}
  },
  bindEvents: {
    'beforeShow': function () {
      this.indexSwiper = new Swiper('#container-swiper', {
        loop: false,
        onSlideChangeStart: function (swiper) {
//      	console.log(swiper.activeIndex)
          $('#nav li').eq(swiper.activeIndex)
            .addClass('active').siblings().removeClass('active');
        }
      });
      //轮播图
      var mySwiper = new Swiper ('#index-swiper', {
				direction: 'horizontal',
				autoplay:1000,
				autoplayDisableOnInteraction:false,
				loop: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
			});
    }
  }
  
});
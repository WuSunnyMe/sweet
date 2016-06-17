var tplHome = require('../tpl/home.string');
var Swiper = require("../lib/swiper-3.3.1.min.js");
// 定义一个视图
window.onload = function(){
	document.addEventListener('touchmove',function(e){
	},false);
}
SPA.defineView('home', {
  html: tplHome,
  
   plugins: ['delegated', {
    name: 'avalon',
    options: function(vm) {
      vm.getHot = [];
    }
  }],
  init: {
    //indexSwiper: null,


    formatData: function (data) {
      var tempArr = [];
      for (var i = 0; i < Math.ceil(data.length); i++) {
            		tempArr[i] = data[i];
          		}
      return tempArr;
    },

    liveListArr: []
  },
  bindEvents: {
    'beforeShow': function () {
      this.indexSwiper = new Swiper('#container-swiper', {
        loop: false,
        onSlideChangeStart: function (swiper) {
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
				pagination: '.swiper-pagination',
			});
    },
    'show':function(){
		var vm = this.getVM();//获得vm对象
		var that = this;
  		$.ajax({
  			url:'/mock/getHot.json',
  			success:function(res){
				var data = res.data;
//		        var tempArr = [];
          		that.liveListArr = data;

          // 格式化数据并赋值
          vm.getHot = that.formatData(data);
  			}
  		});
//		var myScroll = this.widgets.myScroll;
//		myScroll.on('scroll',function(){
//			console.log(this.y);
//		});
  		   // pull to refresh
      var myScroll = this.widgets.indexScroll;
      var topSize = 30;

//    myScroll.scrollBy(0, -topSize);

      var head = $('.head img'),
          topImgHasClass = head.hasClass('up');
      var foot = $('.foot img'),
          bottomImgHasClass = head.hasClass('down');

      // 判断顶部与底部的边界
      myScroll.on('scroll', function () {
          var y = this.y,
              maxY = this.maxScrollY - y;
          if (y >= 0) {
              !topImgHasClass && head.addClass('up');
              return '';
          }
          if (maxY >= 0) {
              !bottomImgHasClass && foot.addClass('down');
              return '';
          }
      });

      // 拖拽停止后的处理
      myScroll.on('scrollEnd', function () {

          // 松开到了上边界，弹回
          if (this.y >= -topSize && this.y < 0) {
              myScroll.scrollTo(0, -topSize);
              head.removeClass('up');
          } else if (this.y >= 0) {
              head.attr('src', '/images/ajax-loader.gif');
              // ajax下拉刷新数据
//            $.ajax({
//              url: '/mock/newgetHot.json',
//              data: {
//                type: 'new'
//              },
//              success: function (res) {
//                // 将新数据prepend到临时的一维数组liveListArr里
//                that.liveListArr = res.data.concat(that.liveListArr);
//
//                // 格式化最新的一维数组，进行avalon数组渲染
//                vm.getHot = that.formatData(that.liveListArr);
//
//                // 恢复现场
//                setTimeout(function () {
//                  myScroll.scrollTo(0, -topSize);
//                  head.removeClass('up');
//                  head.attr('src', '/images/arrow.png');
//                }, 0);
//              }
//            });
          }

          var maxY = this.maxScrollY - this.y;
          var self = this;

          // 底部收回
          if (maxY > -topSize && maxY < 0) {
              myScroll.scrollTo(0, self.maxScrollY + topSize);
              foot.removeClass('down')
          } else if (maxY >= 0) {
              foot.attr('src', '/images/ajax-loader.gif');

              // ajax上拉加载数据
              $.ajax({
                url: '/mock/moregetHot.json',
                data: {
                  type: 'more'
                },
                success: function (res) {
                  // 追加新数据
                  that.liveListArr = that.liveListArr.concat(res.data);

                  // 格式化数据再次赋值
                  var moreArray = that.formatData(that.liveListArr);
                  vm.getHot = moreArray;

                  // 恢复现场
                  setTimeout(function () {
                    myScroll.scrollTo(0, self.y + topSize);
                    foot.removeClass('down');
                    foot.attr('src', '/images/arrow.png');
                  }, 0);
                }
              });
          }
      });
  	}
  },
  bindActions:{
  	'switch.view':function(e){
			$(e.el).addClass("active").siblings().removeClass("active");
			this.indexSwiper.slideTo($(e.el).index());
	  	},
//	  	'x':function(e,data){
//	  		SPA.open('y', {
//	  			param: {
//	  				id: data.id
//	  			}
//	  		})
//	  	}
  }
});
var Swiper = require("../lib/swiper-3.3.1.min.js");
var indexTpl = require("../tpl/index.string");

SPA.defineView('index', {
  html: indexTpl,
  plugins: ['delegated'],
	modules:[{
		name:'content',
		container:'.m-index-container',
		views:['home','find','fenlei'],
		defaultTag:'home'
	}],
  //初始化
    init: {
	    indexSwiper: null
    },
  bindActions:{
  	'switch.view':function(e){
  		$(e.el).addClass("active").siblings().removeClass("active");
  		this.modules.content.launch(e.data.tag)
 	 },
 	 'goto.my':function(){
 	 		SPA.open('my');
 	 }
  }
  
});
//"scroolTop" : function(e){
//	    	
//	    	var myScroll = new IScroll('#index-scroll', {});
//	    	myScroll.scrollTo(0, 0, 100, IScroll.utils.ease.quadratic   );
//	    	
//	    },
//
//<div class="scroolTop" action-type="scroolTop" data-scroll-id="indexScroll">
//	<img src="../../../images/mipmap-xhdpi-v4/side_bg_up.png" />
//</div>
//
//	    },
	    

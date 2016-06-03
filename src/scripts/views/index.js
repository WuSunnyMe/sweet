var Swiper = require("../lib/swiper-3.3.1.min.js");
var indexTpl = require("../tpl/index.string");
	/*
	var t1,t2,t;
	var nav = document.getElementsByTagName('nav')[0];
	document.addEventListener('touchstart',function(ev){
		ev.preventDefault();
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		t1 = ev.touches[0].pageY;
		
	},false);
	document.addEventListener('touchmove',function(evt){
		var nav =document.getElementsByClassName("nav")[0];
		var getBoundingClientRect  = nav.getBoundingClientRect();
		console.log(getBoundingClientRect)
		evt.preventDefault();
		t2 = evt.touches[0].pageY;
		t = t1-t2;
		if(t>160){
			
			nav.style.display = "block";
		}else{
			nav.style.display = "none";
		}
	},false);
	document.addEventListener('touchend',function(){
		t = t1-t2;
	},false)
	*/

SPA.defineView('index', {
  html: indexTpl,
  plugins: ['delegated'],
	modules:[{
		name:'content',
		container:'.m-index-container',
		views:['home','find','my','fenlei'],
		defaultTag:'fenlei'
	}],
  //初始化
    init: {
	    indexSwiper: null
//	    setActive: function (obj) {
//	      obj.addClass('active').siblings().removeClass('active');
//  	}
    },
  bindActions:{
  	'switch.view':function(e){
		$(e.el).addClass("active").siblings().removeClass("active");
		this.indexSwiper.slideTo($(e.el).index()+1);
  	},
  	'switch.view':function(e){
  		this.modules.content.launch(e.data.tag)
 	 }
  },
  
});

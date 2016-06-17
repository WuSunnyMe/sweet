require("./lib/spa.min.js");
require("./views/guide.js");
require("./views/index.js");
require("./views/find.js");
require("./views/home.js");
require("./views/my.js");
require("./views/fenlei.js");
require("./views/detail.js");
require("./views/change.js");
require("./views/category.js");
// 配置视图的信息
var indexView = SPA.util.storage('isvisited')?'index':'guide';
SPA.config({
  indexView: indexView//第一个视图
});
	

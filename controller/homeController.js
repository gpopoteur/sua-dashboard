var HomeController = function () {
	var _this = this;
	
	_this.index = function (req, res){
	  res.render('index', { title: 'Express' });
	};

};

module.exports = HomeController;
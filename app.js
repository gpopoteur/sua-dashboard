
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.Server(app);

var io = require('socket.io')(server);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Controllers
var HomeController = require('./controller/homeController');
var homeController = new HomeController;

var APIController = require('./controller/apiController');
var apiController = new APIController(http);

// Routes
app.get('/', homeController.index);

app.get('/api/in/light', apiController.getLight);
app.get('/api/in/door', apiController.getDoor);
app.put('/api/out/door/open', apiController.openDoor);
app.put('/api/out/door/close', apiController.closeDoor);
app.post('/api/callback', function (req, res) {
	
	console.log('api callback');
	console.log('body', req.body);
	io.emit('new_data', req.body);

	res.end();
});

app.get('/subscribe', apiController.subscribe);

app.post('/io', function (req, res) {
	io.emit('new_data', req.body);
	res.end();
});

///////////////
// Socket IO //
///////////////
io.on('connection', function (socket) {
	console.log('connection');

	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});

server.listen(app.get('port'));
var defaultOptions = require('../utils/options.js');
var request = require('../utils/request.js');

var APIController = function () {
	var _this = this;
	
	var services = {
		'in': {
			light: defaultOptions.path + 'DF-SENSOR.LUZ',
			temperature: defaultOptions.path + 'DF-SENSOR.TEMPERATURA',
			vibrate: defaultOptions.path + 'DF-SENSOR.VIBRACION',
			sound: defaultOptions.path + 'DF-SENSOR.SONIDO',
			door: defaultOptions.path + 'DF-PORTA.CERROJO'
		},
		'out': {
			light: defaultOptions.path + 'DF-LUZ', 
			fan: defaultOptions.path + 'DF-VENTILADOR',
			door: defaultOptions.path + 'DF-PUERTA'
		}
	};

	// Public Methods
	_this.getLight = function (req, res){
		request(services.in.light, { method : 'GET' }, {}, function (data) {
			res.json(data);
		});
	};

	_this.getTemperature = function (req, res){
		request(services.in.temperature, { method : 'GET' }, {}, function (data) {
			res.json(data);
		});
	};

	_this.getVibration = function (req, res){
		request(services.in.vibrate, { method : 'GET' }, {}, function (data) {
			res.json(data);
		});
	};

	_this.getSound = function (req, res){
		request(services.in.sound, { method : 'GET' }, {}, function (data) {
			res.json(data);
		});
	};

	_this.getDoor = function (req, res){
		request(services.in.door, { method : 'GET' }, {}, function (data) {
			res.json(data);
		});
	};

	_this.openDoor = function (req, res) {
		request(services.out.door, { method : 'PUT' }, { action: 'biaPulseOn' }, function (data) {
			res.json(data);
		});
	};

	_this.closeDoor = function (req, res) {
		request(services.out.door, { method : 'PUT' }, { action: 'biaPulseOff' }, function (data) {
			res.json(data);
		});
	};

	_this.getAllDevices = function (req, res) {
		request('/devFuncs', { method: 'GET' }, {}, function (data) {

			var response = [];
			for (var i = 0; i < data.length; i++) {
				var d = data[i];

				var obj = { 
					timeStamp: "2014/10/29 12:55:53.982",
					status: d.currentState,
					device: d.device.id,
					data: d.currentState,
					action: d.lastAction,
					type: d['devfunc-type'],
					devfunc: d.id 
				};

  				response.push(obj);
			};

			res.json(response);
		});
	};

	_this.subscribe = function (req, res) {
		var object = {
		  eventType: "DeviceFunctionalityEvent",
		  eventExpression: {
		    devFunc: "DF-SENSOR.LUZ",
		  },
		  callback: {
		    url: "http://158.42.244.16:3000/api/callback" 
		  }
		};
		
		request('/subscriptions', { method: 'POST' }, { port: 8183 }, object, function (data) {
			res.json(data);
		});
	};
};

module.exports = APIController;
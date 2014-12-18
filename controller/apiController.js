var APIController = function (http) {
	var _this = this;
	
	var services = {
		'in': {
			light: 'DF-SENSOR.LUZ',
			temperature: 'DF-SENSOR.TEMPERATURA',
			vibrate: 'DF-SENSOR.VIBRACION',
			sound: 'DF-SENSOR.SONIDO',
			door: 'DF-PORTA.CERROJO'
		},
		'out': {
			light: 'DF-LUZ', 
			fan: 'DF-VENTILADOR',
			door: 'DF-PUERTA'
		}
	}

	var defaultOptions = {
		host: 'http://tambori.dsic.upv.es',
		port: 8182,
		path: '/devFunc/',
		method: 'GET'
	}

	function request(req, res, url, method, postData) {

			var requestOptions = {
				host: defaultOptions.host,
				port: defaultOptions.port,
				path: defaultOptions.path + url,
				method: method || defaultOptions.method,
				headers: {
				  'Content-Type': 'application/json'
				}
			}

			if(postData){
				postData = JSON.stringify(postData);
				requestOptions.headers['Content-Length'] = postData.length
			}

			var request = http.request(requestOptions, function(response) {
				console.log('STATUS: ' + response.statusCode);
				console.log('HEADERS: ' + JSON.stringify(response.headers));
				response.setEncoding('utf8');
				var strResponse = '';

				response.on('data', function (chunk) {
					strResponse += chunk;
				});

				response.on('end', function(){
					var jsonObject = JSON.parse(strResponse);
					res.json(jsonObject);
				});
			});

			request.on('error', function(e) {
				console.log('problem with request: ' + e.message);
			});

			if(postData){
				request.write(postData);
			}
			request.end();
	}

	// Public Methods
	_this.getLight = function (req, res){
		request(req, res, services.in.light, 'GET');
	};

	_this.getTemperature = function (req, res){
		request(req, res, services.in.temperature, 'GET');
	};

	_this.getVibration = function (req, res){
		request(req, res, services.in.vibrate, 'GET');
	};

	_this.getSound = function (req, res){
		request(req, res, services.in.sound, 'GET');
	};

	_this.getDoor = function (req, res){
		request(req, res, services.in.door, 'GET');
	};

	_this.openDoor = function (req, res) {
		request(req, res, services.out.door, 'PUT', { action: 'biaPulseOn' });
	}

	_this.closeDoor = function (req, res) {
		request(req, res, services.out.door, 'PUT', { action: 'biaPulseOff' });
	}

	_this.subscribe = function (req, res) {
		// var object = {
		//   "eventType": "DeviceFunctionalityEvent",
		//   "eventExpression": {
		//     "devFunc": "DF-SENSOR.LUZ",
		//   },
		//   "callback": {
		//     "url": "http://158.42.244.16:3000/api/callback" 
		//   }
		// };

		// request(req, res, 'subscriptions' , 'POST', object);
	}
};

module.exports = APIController;
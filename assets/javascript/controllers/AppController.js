angular.module('app').controller('AppController', ['$scope','socket', 'devices', function ($scope, socket, devices) {
	
	$scope.logs = [];
	$scope.devices = [];

	function updateDevice (data) {
		var obj = _.find($scope.devices, function (d) {
			return d.device === data.device;
		});

		if(obj){
			obj.timeStamp = data.timeStamp;
			obj.status = data.status;
			obj.data = data.data;
			obj.action = data.action;
			obj.type = data.type;
			obj.devfunc = data.devfunc;
		}else{
			$scope.devices.push(data);
		}

		$scope.logs.push(angular.copy(data));
	}

	// Get all the devices
	devices.all().success(function (data) {
		for (var i = data.length - 1; i >= 0; i--) {
			var d = data[i];

			updateDevice(d);
		};
	});

	////////////////
	// Socket IO //
	////////////////
	// Evento que se dispara tan pronto se conecta el cliente al servidor
	socket.on("connect", function () {
		
		socket.on('news', function (data) {
			console.log(data);
			socket.emit('my other event', { my: 'data' });
		});

		//Evento para recepcion de los valores actuales de las variables.
		socket.on("new_data",function(data){
			$scope.$broadcast("new_data", data);
			
  			updateDevice(data);
		});

		// Envento "disconnect": se dispara cuando el clienet se 
		// desconecta del servidor o el servidor se cae.
		socket.on("disconnect",function(){
			
		});

	});

}]);
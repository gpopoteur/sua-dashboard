angular.module('app').controller('AppController', ['$scope','socket', function ($scope, socket) {
	
	$scope.logs = [];
	$scope.devices = [];

	////////////////
	// Socket IO //
	////////////////
	// Evento que se dispara tan pronto se conecta el cliente al servidor
	socket.on("connect",function(){
		
		socket.on('news', function (data) {
			console.log(data);
			socket.emit('my other event', { my: 'data' });
		});

		//Evento para recepcion de los valores actuales de las variables.
		socket.on("new_data",function(data){
			$scope.$broadcast("new_data", data);
			
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
			console.log('controller', data);
		});

		// Envento "disconnect": se dispara cuando el clienet se 
		// desconecta del servidor o el servidor se cae.
		socket.on("disconnect",function(){
			
		});

	});

}]);
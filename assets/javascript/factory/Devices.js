angular.module('app').factory('devices', ['$http', function($http){
	return {
		all: function () {
			return $http.get('/api/devices');
		}
	};
}])
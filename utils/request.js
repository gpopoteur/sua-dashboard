var defaultOptions = require('./options.js');
var http = require('http');

function request(url, options, postData, callback) {

	var options = ( options || {} );

	var requestOptions = {
		host: options.host || defaultOptions.host,
		port: options.port || defaultOptions.port,
		path: url,
		method: options.method || defaultOptions.method,
		headers: {
			'Content-Type': 'application/json'
		}
	}

	console.log('requestOptions', requestOptions);

	if (postData) {
		postData = JSON.stringify(postData);
		requestOptions.headers['Content-Length'] = postData.length
	}

	var request = http.request(requestOptions, function(response) {
		console.log('STATUS: ' + response.statusCode);
		console.log('HEADERS: ' + JSON.stringify(response.headers));
		response.setEncoding('utf8');
		var strResponse = '';

		response.on('data', function(chunk) {
			strResponse += chunk;
		});

		response.on('end', function() {
			var data = JSON.parse(strResponse);
			if(callback){
				callback(data);
			}
		});
	});

	request.on('error', function(e) {
		console.log("Error: " + e.message); 
   		console.log( e.stack );
	});

	if (postData) {
		request.write(postData);
	}

	request.end();
}

module.exports = request;
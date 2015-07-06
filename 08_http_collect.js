var http = require('http');

var getRequest = function(url){
	http.get(url, function(response){
		response.setEncoding("utf8");
		response.on("data", function(data){


		});
	}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
};

getRequest(process.argv[2]);
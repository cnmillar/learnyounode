var fs = require('fs');

numberOfLines = function(directory){
	fs.readFile(directory, function(err, data){
		var nLines = data.toString().split('\n').length - 1;
		console.log(nLines);
	})
}

numberOfLines(process.argv[2]);
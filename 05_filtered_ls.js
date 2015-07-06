var fs = require('fs');
var path = require('path');

var listFiles = function(directory, extension){
	fs.readdir(directory, function(err, files){
		var filesWithExt = files.filter(function(value)
		{
			return path.extname(value) == "." + extension;
		});
		for(var i = 0; i < filesWithExt.length; i ++ )
		{
			console.log(filesWithExt[i]);
		}
	});
};

listFiles(process.argv[2], process.argv[3]);
var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback){
	fs.readdir(directory, function(err, files)
	{
		if(err) { return callback(err); }

		var filesWithExt = files.filter(function(value){return path.extname(value) == '.' + extension;});
		callback(null, filesWithExt);
	});	
};

var fs = require('fs');

numberOfLines = function(directory){
	var buffer = fs.readFileSync(directory).toString();
	return buffer.split('\n').length - 1;
}

console.log(numberOfLines(process.argv[2]));
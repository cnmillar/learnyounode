var mod = require('./06_module.js');

mod(process.argv[2], process.argv[3], function(err, filtered)
{
	if(err) { return console.error(err.message); }
	
	for(var i = 0; i < filtered.length; i ++ ){
		console.log(filtered[i]);
	}
});
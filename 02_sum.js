var sumNum = function(numbers){
	var result = 0
	for(var i=0; i < numbers.length; i++){
		result += Number(numbers[i]);
	}
	return result;
}

var numbers = process.argv.filter(function(value){
	return !isNaN(value);
})

console.log(sumNum(numbers));

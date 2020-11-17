const repeatString = function(word, num_repeats) {
	if(num_repeats<0){
		return 'ERROR'
	}

	let outputString = "";

	for (let i = 0; i < num_repeats; i++) {
		outputString = outputString + word;
	}

	return outputString;
}



module.exports = repeatString

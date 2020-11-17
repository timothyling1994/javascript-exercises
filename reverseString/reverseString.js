const reverseString = function(word) {

	let length = word.length-1;
	let outputString = '';

	for (let i = length; i >= 0; i--)
	{	
		outputString = outputString + word[i];
	}

	return outputString;
}

module.exports = reverseString

const palindromes = function(str) {
  	let reverse = "";

  	let alphanumericstr = str.replace(/[^0-9a-z]/gi, '');


	for(let i = alphanumericstr.length;i>0;i--)
	{
		reverse += alphanumericstr[i-1];
	}
	
	if(reverse.toLowerCase() === alphanumericstr.toLowerCase())
	{
		return true;
	}
	return false; 
}
module.exports = palindromes

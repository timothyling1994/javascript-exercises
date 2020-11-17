const ftoc = function(faren) {
	let celcius = 0;

	celcius = (faren-32)*(5/9);
	return Math.round(celcius*10)/10; 
}

const ctof = function(celcius) {
	let faren = 0;

	faren = celcius*(9/5) + 32;  
	return Math.round(faren*10)/10;

}

module.exports = {
  ftoc,
  ctof
}

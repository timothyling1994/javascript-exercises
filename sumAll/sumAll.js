const sumAll = function(num1,num2) {

	let sumTotal = 0;
	let numStart = 0;
	let numEnd = 0;

	if(!Number.isInteger(num1)|| !Number.isInteger(num2)|| num1<0 || num2<0)
	{
		return "ERROR"
	}

	if (num1 > num2)
	{
		numStart = num2; 
		numEnd = num1; 

	}

	else
	{
		numStart = num1;
		numEnd = num2; 
	}

	for (let i = numStart; i<=numEnd; i++)
	{
		sumTotal = sumTotal + i;
	}

	return sumTotal
}

module.exports = sumAll

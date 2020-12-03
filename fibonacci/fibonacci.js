const fibonacci = function(nth) {

	if(nth<=0)
	{
		return 'OOPS';
	}

	let fibArr = [1,1];
	for(let i = 2;i<nth;i++)
	{
		fibArr[i] = fibArr[i-2]+fibArr[i-1];
	}
	return fibArr[nth-1];

}

module.exports = fibonacci

const removeFromArray = function() {
	if(arguments !== undefined)
	{
		let initialArray = arguments[0];

		let newArray - [];

		initialArray.forEach((item) => {

			if(!args.includes(item)){
				newArray.push(item);
			}
		});



		/*
		for(let i = 1; i < arguments.length;i++)
		{
			for(let j=0;j<initialArray.length;j++)
			{
				if(initialArray[j] === arguments[i])
				{
					initialArray.splice(j,1);
				}
			}
		}*/

		return newArray;

	}

	return 'ERROR'
}

module.exports = removeFromArray

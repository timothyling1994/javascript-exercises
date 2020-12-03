let findTheOldest = function(arrObj) {
	let result=[];

	//if(arrObj.every((element)=>'yearOfDeath' in element))
	//{
		result = arrObj.sort(function(a,b){
		if(('yearOfDeath' in a) && ('yearOfDeath' in b))
		{
			return (b.yearOfDeath-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth);
		}
		else
		{
			let currentyear = new Date().getFullYear();
			if(!('yearOfDeath' in a))
			{
			
				return (b.yearOfDeath-b.yearOfBirth)-(currentyear-a.yearOfBirth);
			}
			else
			{
		
				return (currentyear-b.yearOfBirth)-(a.yearOfDeath-a.yearOfBirth);
			}
		}

		});
	//}



	return result[0];
	/**arrObj.reduce(function(oldest,person){
		let age = person.yearOfDeath-person.yearOfBirth;
		if(!oldest[age])
		{
			oldest[age]=person.name;
		}
		else
		{
			oldest[age].push=person.name;
		}

	}
	,{});**/

	//oldest.sort()
}

module.exports = findTheOldest

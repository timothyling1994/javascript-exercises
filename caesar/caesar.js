const caesar = function(str,shift) {

	let encoded_str = "";
	for(let i=0;i<str.length;i++)
	{
		let currentVal = str.charCodeAt(i);

		if(currentVal>= 65 && currentVal<=90)
		{
			if(currentVal+(shift%26)>90)
			//wrap from bottom
			{
				encoded_str += String.fromCharCode(65+(currentVal+(shift % 26)-90)-1);
			}

			else if(currentVal+(shift%26)<65)
			{
				encoded_str += String.fromCharCode(90+(currentVal+(shift % 26)-65)+1);

			}
			else
			{
				encoded_str += String.fromCharCode(currentVal+(shift%26));
			}

		}
		else if(currentVal>=97 && currentVal<=122)
		{
			if(currentVal+(shift%26)>122)
			//wrap from bottom
			{
				encoded_str += String.fromCharCode(97+(currentVal+(shift % 26)-122)-1);
			}

			else if(currentVal+(shift%26)<97)
			//wrap from top
			{
				encoded_str += String.fromCharCode(122+(currentVal+(shift % 26)-97)+1);
			}
			else
			{
				encoded_str += String.fromCharCode(currentVal+(shift%26));
			}
		}
		else
		{
			encoded_str += String.fromCharCode(currentVal);
		}
		
	}

	return encoded_str;
}

module.exports = caesar

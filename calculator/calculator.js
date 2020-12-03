function add (num1,num2) {
	return num1+num2;
}

function subtract (num1,num2) {
	return num1-num2;
}

function sum (arr) {
	let total = arr.reduce((total,item) => {
		return total + item;
	},0);

	return total;
}

function multiply (arr) {
	let total = arr.reduce((total,item)=>{
		return total*item;
	},1);

	return total;
}

function power(num1,num2) {
	let total=1;
	for (let i = 0; i < num2; i++) {
		total = total*num1;
	}
	return total;
}

function factorial(num1) {
	let total = 1;
	for (let i = num1; i > 0; i--) {
		total = total*i;
	}
	return total;

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
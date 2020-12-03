const getTheTitles = function(booksArr) {
	//let reducer = (arr,book) => (arr.push(book.title));
	//booksArr.reduce(reducer,[]);

	let arr = booksArr.map(book=>book.title);

	return arr;
}

module.exports = getTheTitles;

// String Object
var str = 'Hello World!';
console.log(str.length);

console.log(str.indexOf('World')); // returns -1 if the word that we are looking for doesn't exist in the string

var str1 = 'Find where we "where" yesterday';
console.log(str1.indexOf('where'));
console.log(str1.indexOf('where', 3));
console.log(str1.lastIndexOf('where'));

console.log(str.search('World'));

console.log(str.slice(str.indexOf('World'), 9));
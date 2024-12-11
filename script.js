let name =" jhone doe ";

let trimmedText =name.trim();
// The trim() method removes whitespace from the both sides of the string.

console.log(trimmedText); 

// splitting  string into an array:
const data = "this is a string which will into array ";

const splittedData = data.split(" ");

console.log(splittedData);

const something = "javascript is a programming language";
// slice extracts the part of the string it take 2 parameters 1st is the starting position and second is the ending position and ending position is not included.
let newData = something.slice(14);
 newData = something.slice(0,4);
newData = something.slice(-2,-4);
console.log(newData);

// substring is simmilar to slice but connot take negative values.
// substr
// 1st parameter is the starting position
// 2nd parameter is length of the string you want to extract.
newData = something.substr(0,15);

console.log(newData);

//replace
const mystring = "All that glitter is not gold. gold is precious";
// replace method replace the first matched word.
let newText = mystring.replace("gold","silver");
console.log(newTexr);
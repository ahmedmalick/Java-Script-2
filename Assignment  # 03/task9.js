var array = [24, 53, 78, 91, 12];

document.write(`Array items: ${array} <br />`);

var sortedArray = array.sort();
var largestNumber = sortedArray[sortedArray.length - 1];

document.write(`The Largest Number is: ${largestNumber}`);
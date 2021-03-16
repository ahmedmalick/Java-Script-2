var array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var unique = [...new Set(array)].sort();

document.write(`Original Value : ${array} <br />
Sorted value : ${unique}`);
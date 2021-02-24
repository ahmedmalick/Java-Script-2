var age = Number(prompt('Please enter your age'));
var birthYear = new Date().getFullYear() - age;

document.write(`
Your Age is ${age}
Your birth year is ${birthYear}
`)
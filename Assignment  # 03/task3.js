var colours = ['red', 'green', 'blue', 'orange', 'pink', 'purple'];

var input1 = prompt('Would you like to add a color in the beginning of the array');
var input2 = prompt('Would you like to add a color in the end of the array');
var input3 = Number(prompt('To which index of array would you like to add a colour'));
var input4 = prompt('Which colour would you like to add at that particular index');
var input5 = Number(prompt('To which index of array would you like to delete a colour'));
var input6 = Number(prompt('How much colour would you like to delete'));

colours.unshift(input1);
colours.push(input2);
colours.unshift('black', 'white')
colours.shift(0, 1)
colours.shift(colours.length - 1, 1)
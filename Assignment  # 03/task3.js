var colours = ['red', 'green', 'blue', 'orange', 'pink', 'purple'];

var input1 = prompt('Which colour you wanna add in the beginning of the array');
colours.unshift(input1);
alert(colours);

var input2 = prompt('Which colour you wanna add in the end of the array');
colours.push(input2);
alert(colours);

var input3 = Number(prompt('To which index of array would you like to add a colour'));
var input4 = prompt('Which colour would you like to add at that particular index');
colours[input3] = input4
alert(colours);

var input5 = Number(prompt('To which index of array would you like to delete a colour'));
var input6 = Number(prompt('How many colour would you like to delete'));
colours.splice(input5, input6) 
alert(colours);
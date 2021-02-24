var num1 = Number(prompt("Enter first number here:"));
var sign = prompt("Enter any arithmetical symbol:");
var num2 = Number(prompt("Enter second number here:"));

if (sign === '+'){
    alert(num1 + num2)
}
else if (sign === '-'){
    alert(num1 - num2)
}
else if (sign === '*'){
    alert(num1 * num2)
}
else if (sign === '/'){
    alert(num1 / num2)
}
else if (sign === '%'){
    alert(num1 % num2)
} else{
    alert("Please enter correct sign")
}
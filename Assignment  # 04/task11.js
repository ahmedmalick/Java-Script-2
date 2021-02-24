var num = prompt("Enter the number you want to get mean: ");
var output = [];
var result = 0;

for (var i = 0; i < num.length; i++) {
    output.push(+num.charAt(i));
    result += Number(output[i]);
}

document.write(`Input: ${num}`);
document.write(`<br />Output: ${Math.round(result / output.length)}`);
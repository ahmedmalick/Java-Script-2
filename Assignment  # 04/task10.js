var num = Number(prompt("Enter the number you want to convert: "));
var decimalPlaces = Number(prompt("Enter the decimal places you want to convert your number"));

document.write(`Input:
    ${num}
    ,
    ${decimalPlaces}<br />
    Output:
    ${(Math.round(num * 100) / 100).toFixed(decimalPlaces)}
`);
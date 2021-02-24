var number = Number(prompt('Enter a positive integer'))
var fact = 1;

for (i = 1; i <= number; i++) {
    fact *= i;
}

document.write(`The factorial of ${number} is ${fact}`);
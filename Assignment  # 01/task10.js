var a;
document.write(`<br/> value after variable declaration is ${a}`);

a = 5;
document.write(`<br/> Initial value: ${a}`);

var b = ++a;
document.write(`<br/> Value after increment is: ${b}`);

var c = (b + 7);
document.write(`<br/> Value after addition is: ${c}`);

var d = --c;
document.write(`<br/> Value after decrement is: ${d}`);

var e = (d % 3);
document.write(`<br/> The reminder is: ${e}`);
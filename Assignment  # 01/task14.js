var a = 2;  // declare and initialize a with 2.
var b = 1;  // declare and initialize b with 1.

var result = --a - --b + ++b + b--;  // 1 - 0 + 1 + 1 = 3

--a;  // 1

-a - --b;  // 0 - 0 = 0

--a - --b + ++b;  // -1 - -1 + 0 = 0

--a - --b + ++b + b--;  // -2 - -2 + -1 + 1 = -2

document.write(
    `The value of a is: ${a} <br />
    The value of b is: ${b} <br />
    The result is: ${result}`
)
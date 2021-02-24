var a = 2, b = 1;  // declare and initialize two variables a with 2 and b with 1

var result = --a - --b + ++b + b--;  // 1 - 0 + 1 + 1 = 3

--a;  // 1

-a - --b;  // 0 - 0 = 0

--a - --b + ++b;  // -1 - -1 + 0 = 0

var c = --a - --b + ++b + b--;  // -2 - -2 + -1 + 1 = -2
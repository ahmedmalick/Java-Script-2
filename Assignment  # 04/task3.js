var password = prompt(
    "Enter password\n-It should contain alphabets and numbers\n-It should not start with a number\n-It must at least 8 characters long"
);

while (!password.match(/^[a-zA-Z][0-9a-zA-Z]{7}$/)) {
    password = prompt(
        "Wrong Password\nPlease Enter password with the specific format-It should contain alphabets and numbers\n-It should not start with a number\n-It must at least 8 characters long"
    );
}
var email = prompt("Please enter your email");
while (
    !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
) {
    email = prompt("Wrong Email");
}
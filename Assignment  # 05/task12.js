function checkUserGuess(user_guess) {
    switch (user_guess) {
        case random_num:
            alert("You are right, You won");
            break;
        default:
            alert("Incorrect, Please try again");
    }
}

function userGuess() {
    var i = 0;
    while (i < 4) {
        switch (i) {
            case 0:
                var user_guess = parseInt(prompt("Please guess a number between 1 to 100: "));
                checkUserGuess(user_guess);

            case 1:
                var user_guess = parseInt(prompt("Please guess a number between 1 to 100: "));
                checkUserGuess(user_guess);

            case 2:
                var user_guess = parseInt(prompt("Please guess a number between 1 to 100: "));
                checkUserGuess(user_guess);

            default:
                alert("You lose!");
                var ask_again = prompt("Do you wish to play again? Yes/No");
        }
        i++;
        if (ask_again.toLowerCase() === "yes") {
            i = 0;
        } else if (ask_again.toLowerCase() === "no") {
            alert("Thank you for playing with us today.");
        }
    }
}

var random_num = Math.random();
random_num = (random_num * 100) + 1;
random_num = Math.floor(random_num);

userGuess();
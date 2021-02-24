var num1 = 5;
var num2 = Number(prompt("Guess the number"));

if (num1 === num2) {
    alert(`Bingo! Correct answer`)
}else if (++num1 === num2) {
    alert(`Close enough to correct answer`)
} else{
    alert(`You didn't find correct number`)
}
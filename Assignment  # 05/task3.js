var input = prompt('Please enter a palindrome');

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinStr = reverseArray.join("");

    if (input === joinStr) {
        alert(`${joinStr} is a palindrome`);
    }
}

reverseString(input);
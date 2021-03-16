var input = prompt('Check is it vowel or not').toLowerCase();


function isVowel(input) {
    switch (input) {
        case 'a':
            return true;
            break;
        case 'e':
            return true;
            break;
        case 'i':
            return true;
            break;
        case 'o':
            return true;
            break;
        case 'u':
            return true;
            break;
        default:
            return false;
            break;
    }
}

alert(isVowel(input));
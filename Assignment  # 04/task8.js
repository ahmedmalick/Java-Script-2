var input = prompt("Enter any number From 1 to 10000");
var unitMap = {
    "0": '',
    "1": 'one',
    "2": 'two',
    "3": 'three',
    "4": 'four',
    "5": 'five',
    "6": 'six',
    "7": 'seven',
    "8": 'eight',
    "9": 'nine',
    "10": "ten",
    "11": 'eleven',
    "12": 'twelve',
    "13": 'thirteen',
    "14": 'fourteen',
    "15": 'fifteen',
    "16": 'sixteen',
    "17": 'seventeen',
    "18": 'eighteen',
    "19": 'nineteen'
};
var tenUnit = {
    "1": 'ten',
    "2": 'twenty',
    "3": 'thirty',
    "4": 'fourty',
    "5": 'fifty',
    "6": 'sixty',
    "7": 'seventy',
    "8": 'eighty',
    "9": 'ninety'
};
var hunUnit = {
    "1": ' hundred '
};
var thousUnit = {
    "1": ' thousand '
};


var answer;
var length = input.length;


if (parseInt(input) <= 19) {
    answer = unitMap[input]

} else if (input.length == 2) {
    answer = tenUnit[input[0]] + " " + unitMap[input[1]];

} else if (input.length == 3) {
    answer = unitMap[input[0]] + hunUnit[1];

    if (input.length == 3) {
        answer = unitMap[input[0]] + hunUnit[1] + " & " + tenUnit[input[1]]
    }
    if (input.length == 3) {
        answer = unitMap[input[0]] + hunUnit[1] + " & " + tenUnit[input[1]] + " " + unitMap[input[2]]
    }
} else if (input.length == 4) {
    answer = unitMap[input[0]] + thousUnit[1]

    if (input.length == 4) {
        answer = unitMap[input[0]] + thousUnit[1] + "& " +
            unitMap[input[1]] + hunUnit[1]
    }
    if (input.length == 4) {
        answer = unitMap[input[0]] + thousUnit[1] + unitMap[input[1]] +
            hunUnit[1] + "& " + tenUnit[input[2]]
    }
    if (input.length == 4) {
        answer = unitMap[input[0]] + thousUnit[1] + unitMap[input[1]] +
            hunUnit[1] + "& " + unitMap[input[3]]
    }
    if (input.length == 4) {
        answer = unitMap[input[0]] + thousUnit[1] + unitMap[input[1]] +
            hunUnit[1] + " & " + tenUnit[input[2]] + " " + unitMap[input[3]]
    }
} else if (input.length == 5) {
    answer = tenUnit[input[0]] + thousUnit[1]
}

document.write(`Your input number is ${input} <br /> Your integer inwords is ${answer}`);
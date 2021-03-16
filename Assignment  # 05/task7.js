var input = new Date(prompt('Please enter any date (MM/DD/YY)'));

function checkWeekend(date) {
    if (date.getDay() === 0 || date.getDay() === 6) {
        document.write(`${date} is a weekend`)
    } else {
        document.write(`${date} isn't a weekend`)
    }
}

checkWeekend(input)
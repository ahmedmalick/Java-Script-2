var input = prompt(`Please Enter time in 24 hours time zone (like: 2200)`);

if (input >= 0000 && input < 1200) {
    alert(`Good Morning`);
} else if (input >= 1200 && input < 1700) {
    alert(`Good Afternoon`);
} else if (input >= 1700 && input < 2100) {
    alert(`Good Evening`)
} else if (input >= 2100 && input < 2359) {
    alert(`Good Night`)
}
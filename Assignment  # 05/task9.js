var newWeek = Number(prompt("How many Weeks add in current Date"));

function addWeeks(weeks) {
    var now = new Date();
    now.setDate(now.getDate() + weeks * 7);
    alert(now);
}

addWeeks(newWeek);
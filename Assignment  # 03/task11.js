var array = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt(`Welcome to ABC bakery what do you wanna order madam/sir?`);

for (var i = 0; i < array.length; i++) {
    var abc = array[i]
    if (input === abc) {
        alert(`${input} is available at index ${i} in our bakery`);
        break;
    }
}

if (input !== abc) {
    alert(`We are sorry. ${input} is not available in our bakery`);
}
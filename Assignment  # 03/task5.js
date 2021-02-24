var names = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var uniqueNames = getUnique(names);
var uniqueArray = [];

function getUnique(array) {

    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;

}

console.log(uniqueNames);
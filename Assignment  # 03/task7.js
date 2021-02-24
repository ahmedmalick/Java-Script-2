let array1 = [10, 20, 4, 40, 60, 70]
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array3 = [];

for (let i = 0; i < array1.length; i++) {
    if (array3.indexOf(array1[i]) == -1)
        array3.push(array1[i])
}

for (let i = 0; i < array2.length; i++) {
    if (array3.indexOf(array2[i]) == -1)
        array3.push(array2[i])
}

array3.sort(function (a, b) {
    return a - b;
})

console.log(array3)
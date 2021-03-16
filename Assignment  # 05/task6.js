var arr = [0, 5, 6, 7];
var newArray = [];

function reverseArray(arr) {    
    for (var a = 0; a < arr.length; a++) {
        newArray.push(arr[a]);
    }
}

reverseArray(arr);

console.log(`Main Array : " + ${arr}`);
console.log("Mirror Of Array : " + newArray);
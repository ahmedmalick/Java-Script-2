var input = prompt('Please enter any string here').toLowerCase();
var vowels = ['a', 'e', 'i', 'o', 'u'];
var count = 0;

for (let j = 0; j < input.length; j++) {
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] == input[j]) {
            count = count + 1;
        }
    }
}

console.log(`Vowels found for ${count} times`)
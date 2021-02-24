var pas1 = '12345678';
var pas2 = prompt(`Please Enter your password`);

console.log(pas2)

if (pas2 === '') {
    alert(`Please fill this field`)
} else if (pas1 === pas2) {
    alert(`Correct! The password you entered matches the original password`)
} else if (pas1 !== pas2) {
    alert(`Incorrect password`)
}

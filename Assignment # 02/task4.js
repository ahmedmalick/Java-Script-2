var sub1 = Number(prompt("Enter first subject number"));
var sub2 = Number(prompt("Enter second subject number"));
var sub3 = Number(prompt("Enter third subject number"));

var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks * 100 / totalMarks).toFixed();

document.write(`<h1>Marks Sheet</h1> <br /><br /><br />`);
document.write(`Total marks: ${totalMarks} <br />`);
document.write(`Marks obtained: ${obtainedMarks} <br />`);
document.write(`Percentage: ${percentage}% <br />`);

if (percentage <= 100 && percentage >= 80) {
    document.write(`Grade: A+ <br />`);
    document.write(`Remarks: Excellent <br />`);
} else if (percentage <= 79 && percentage >= 70) {
    document.write(`Grade: A <br />`);
    document.write(`Remarks: Good <br />`);
} else if (percentage <= 69 && percentage >= 60) {
    document.write(`Grade: B <br />`);
    document.write(`Remarks: You need to improve <br />`);
} else if (percentage <= 59 && percentage >= 0) {
    document.write(`Grade: Fail <br />`);
    document.write(`Remarks: Fail <br />`);
}

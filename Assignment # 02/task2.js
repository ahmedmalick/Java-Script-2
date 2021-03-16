var trafic = prompt("Please Enter the Trafic Color").toLowerCase();
var red = "red";
var yellow = "yellow";
var green = "green";

if (trafic == red) {
    alert("Must Stop")
}
else if (trafic == yellow) {
    alert("Ready to Move")
}
else if (trafic == green) {
    alert("Move Now")
}
else {
    alert("Please Enter the Correct Color")
}
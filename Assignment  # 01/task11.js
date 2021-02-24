var celTemp = 25;
var fahrTemp = 77;

var fahrenheit = (celTemp * 9 / 5) + 32;
var celsius = (fahrTemp - 32) * 5 / 9;

document.write(`${celsius}&#8451; to ${fahrenheit}&#8451;`);
document.write('<br />');
document.write(`${fahrenheit}&#8451; to ${celsius}&#8451;`);
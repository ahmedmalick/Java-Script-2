var date1 = new Date();
document.write("Current Date: " + date1);

var date2 = new Date(date1.setHours(date1.getHours() - 1));
document.write("<br/>1 hour ago it was " + date2);
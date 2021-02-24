var date = new Date();

document.write(`Current Date: ${date}`);
document.write(`<br/>Elapsed milliseconds since January 1, 1970: ${date.getTime()}`);
document.write(`<br />Elapsed minutes since January 1, 1970: ${date.getTime() / (1000 * 60)}`);
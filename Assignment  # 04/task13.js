var date = new Date();

document.write(`Current Date: ${date}
<br/>Elapsed milliseconds since January 1, 1970: ${date.getTime()}
<br />Elapsed minutes since January 1, 1970: ${date.getTime() / (1000 * 60)}`);
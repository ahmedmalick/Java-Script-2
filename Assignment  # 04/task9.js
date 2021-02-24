var str = "<p><strong><em>Only print this</em></strong></p>";

console.log(str);
console.log(
    `Output: ${str
        .replace(/<[^>]*>/g, " ")
        .replace(/\s{2,}/g, " ")
        .trim()}
`);
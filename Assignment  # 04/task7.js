var text = 'The quick brown fox jumps over the lazy dog';
var count = (text.match(/the/gi) || []).length;

console.log(count);
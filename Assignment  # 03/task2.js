var stdName = ["Michael", "Jhon", "Tony"]
var score = [320, 230, 480]
var Percentage = [score[0] * 100 / 500, score[1] * 100 / 500, score[2] * 100 / 500]


document.write(`
Score of ${stdName[0]} is ${score[0]}. Percentage: ${Percentage[0]}% <br />
Score of ${stdName[1]} is ${score[1]}. Percentage: ${Percentage[1]}% <br />
Score of ${stdName[2]} is ${score[2]}. Percentage: ${Percentage[2]}%
`)
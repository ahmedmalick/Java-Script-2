var num = Number(prompt(`Please enter any number`));
var reverse = 0;

while (num !== 0) {
    reverse = (reverse * 10) + (num % 10);
    num = parseInt(num / 10)
}

while (reverse !== 0) {
    switch (reverse % 10) {
        case 0:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        case 1:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        case 2:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        case 3:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        case 4:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        case 5:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        case 6:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        case 7:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        case 8:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        case 9:
            document.write(`
        Input <br />
        ${num} <br />
        Output <br />
        Zero`)
            break;
        default:
            document.write('Please enter a number')
            break;
    }
}
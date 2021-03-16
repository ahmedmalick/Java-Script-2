var Amount = Number(prompt("Please Enter Amount for Withdraw"));

document.write(`You will have ${Math.floor(Amount / 100)} hundred notes ${Math.floor((Amount % 100) / 50)} fifty notes ${(Math.floor(((Amount % 100) % 50) / 10))} ten notes`);
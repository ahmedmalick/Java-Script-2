for (let i = 0; i <= 15; i++) {
    document.write(`${i}, `);
}

document.write(`<br />`);

for (let i = 10; i >= 1; i--) {
    document.write(`${i}, `);
}

document.write(`<br />`);

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(`${i}, `);
    }
}

document.write(`<br />`);

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        document.write(`${i}, `);
    }
}

document.write(`<br />`);

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(`${i}k, `);
    }
}
const readline = require('readline');

const fizzbuzz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fizzbuzz.question('Masukan Angka: ', (range) => {
    for (let i = 1; i <= parseInt(range); i++) {
        let output = "";

        if (i % 3 === 0) {
            output += "Fizz";
        }

        if (i % 5 === 0) {
            output += "Buzz";
        }

        console.log(output || i);
    }

    fizzbuzz.close();
});
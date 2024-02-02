const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {
    const lowerCaseStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    return lowerCaseStr === lowerCaseStr.split('').reverse().join('');
}

rl.question('Masukan String: ', (inputString) => {
    const result = isPalindrome(inputString);

    if (result) {
        console.log(`${inputString} termasuk palindrome.`);
    } else {
        console.log(`${inputString} bukan termasuk palindrome.`);
    }

    rl.close();
});
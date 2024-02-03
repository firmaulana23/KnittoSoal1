import * as readlineSync from 'readline-sync';

function fizzBuzz(angka: number): void {
  for (let i = 1; i <= end; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    console.log(output || i);
  }
}

const end = parseInt(readlineSync.question('Enter the ending number: '));

fizzBuzz(end);
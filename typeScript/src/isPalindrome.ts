import * as readlineSync from 'readline-sync';

function isPalindrome(input: string): boolean {
  const lowerCaseStr = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return lowerCaseStr === lowerCaseStr.split('').reverse().join('');
}

// Get user input
const inputString = readlineSync.question('Enter a string: ');

// Check if the input is a palindrome
const result = isPalindrome(inputString);

// Display the result
if (result) {
  console.log(`${inputString} termasuk palindrome.`);
} else {
  console.log(`${inputString} is not a palindrome.`);
}
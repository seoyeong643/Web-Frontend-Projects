// #1. capslock() - takes in one string and returns the same string with all capital letters
function capslock(str) {
  // 👇 Your code here 👇
  return str.toUpperCase();
}
// UNCOMMENT TO TEST:
console.log(capslock("javascript is bae"));

console.log("--------------------------------------");

// #2. dogYears() - takes in a number and returns that number multiplied by 7

// 👇 Define the function here! 👇
function dogYears(num) {
  return num * 7;
}

// UNCOMMENT TO TEST:
console.log(`You are ${dogYears(30)} in dog years!`);

console.log("--------------------------------------");

// #3. randomNum() - returns a random number between 1 and 10

// HINT: use Math.random

// HINT2: you'll need to mutiply the result by 10

// LEVEL-UP: use Math.floor or Math.ceil to round the result to a whole number

// 👇 Define the function here! 👇
function randomNum() {
  return Math.random() * 10;
}

// UNCOMMENT TO TEST:
console.log(randomNum());
console.log(randomNum());
console.log(randomNum());

console.log("--------------------------------------");

// #4. asciiArt() - no parameters; prints out a piece of ascii art when run
// Visit https://www.asciiart.eu/ for inspiration!

// HINT: you can create multi-line strings if you use backticks instead of quotations marks (if there are backticks in the art itself, you'll need to replace those with single quotes aka apostrophes)

// HINT #2: notice the instructions say to *print* the result (as opposed to return)

// 👇 Define the function here! 👇
function asciiArt() {
  console.log(`
        _    ____   ____ ___ ___      _         _        _             _     _
      / \\  / ___| / ___|_ _|_ _|    / \\   _ __| |_     / \\   _ __ ___| |__ (_)_   _____
    / _ \\ \\___ \\| |    | | | |    / _ \\ | '__| __|   / _ \\ | '__/ __| '_ \\| \\ \\ / / _ \\
    / ___ \\ ___) | |___ | | | |   / ___ \\| |  | |_   / ___ \\| | | (__| | | | |\\ V /  __/
  /_/   \\_\\____/ \\____|___|___| /_/   \\_\\_|   \\__| /_/   \\_\\_|  \\___|_| |_|_| \\_/ \\___|
  `);
}

// UNCOMMENT TO TEST:
asciiArt()

console.log("--------------------------------------");

// =============== BONUS ===============
// whatMonthIsIt() - returns a number corresponding to the current month (July = 7)

// HINT1: first look up how to get the current date from the Date javascript object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// HINT2: store the current date in a variable called "now", then call .getMonth() on that variable and return the result
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

// HINT3: If you find the numbers are off by one, make sure to adjust accordingly!

// 👇 Define the function here! 👇
function whatMonthIsIt() {
  let now = new Date();
  return now.getMonth() + 1;
}
// UNCOMMENT TO TEST:
console.log(whatMonthIsIt());
console.log("--------------------------------------");

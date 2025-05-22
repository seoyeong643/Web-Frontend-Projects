let sum = 0;
let count = 0;
let tempNum = 0;

tempNum = Number(prompt("Please enter your first number"));
sum += tempNum;
count++;

tempNum = Number(prompt("Please enter your second number"));
sum += tempNum;
count++;

tempNum = Number(prompt("Please enter your third number"));
sum += tempNum;
count++;

let average = sum / count;
console.log("The average is: " + average);

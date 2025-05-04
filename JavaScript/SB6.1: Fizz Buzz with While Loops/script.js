/* 

Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

*/

let count = 1;

while (count <= 100) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log("FizzBuzz");
  } else if (count % 3 == 0) {
    console.log("Fizz");
  } else if (count % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(count);
  }
  count++;
}

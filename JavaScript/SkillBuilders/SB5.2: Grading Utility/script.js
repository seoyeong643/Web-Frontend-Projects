function inputGrade(examNumber) {
  let grade = prompt("Please Enter Grade For Exam " + examNumber + ":");
  return Number(grade);
}

let grades = [];

// Input grades.
grades.push(inputGrade(1));
grades.push(inputGrade(2));
grades.push(inputGrade(3));
grades.push(inputGrade(4));

// Drop the lowest grade.
grades.sort(function (a, b) {
  return a - b;
});

let finalGrade = grades.slice(1);
let average = (finalGrade[0] + finalGrade[1] + finalGrade[2]) / 3;

alert("The final grade is " + average);

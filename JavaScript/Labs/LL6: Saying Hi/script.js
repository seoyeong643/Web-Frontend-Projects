console.log("Hi, Billy Bob!");
console.log("Hi, Gunther!");
console.log("Hi, Susan!");

console.log(STUDENTS);

// FORWARDS FOR
for (let i = 0; i < STUDENTS.length; i++) {
  console.log("Hi, " + STUDENTS[i] + "!");
}

// FORWARDS WHILE
let i = 0;
while (i < STUDENTS.length) {
  console.log("Hi, " + STUDENTS[i] + "!");
  i++;
}

// BACKWARDS FOR
for (let i = STUDENTS.length - 1; i >= 0; i--) {
  console.log("Hi, " + STUDENTS[i] + "!");
}

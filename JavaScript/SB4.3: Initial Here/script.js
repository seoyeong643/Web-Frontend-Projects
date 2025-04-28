// Write code to complete the initialHere function 👇
/*
function initialHere(firstName, middleName, lastName) {

  // Store the each initial in a variable appending a period (e.g "S." for Susan) 
  firstInitial = firstName[0] + "."
  middleInitial = middleName[0] + "."
  lastInitial = lastName[0] + "."
  // Log the name to the console in the format "Susan B. Anthony, S.B.A."
  console.log(firstName + " " + middleInitial + " " + lastName + ", " + firstInitial + middleInitial + lastInitial);

  
}*/

function initialHere(fName, mName, lName) {
  console.log(fName[0]);
  console.log(mName[0]);
  console.log(lName[0]);
}

initialHere("Tom", "Jason", "Tim");

/*
  // ⛔️ TEST FUNCTION CALLS - DON’T EDIT BELOW HERE ️️⛔️
  initialHere("Susan", "Brownell", "Anthony"); // output: "Susan B. Anthony, S.B.A."
  initialHere("Martin", "Luther", "King"); // output: "Martin L. King, M.L.K."
  initialHere("Ruth", "Bader", "Ginsburg"); // output: "Ruth B. Ginsburg, R.B.G."
  initialHere("John", "Fitzgerald", "Kennedy"); // output: "John F. Kennedy, J.F.K."
  initialHere("Franklin", "Delano", "Roosevelt"); // output: "Franklin D. Roosevelt, F.D.R."
  */

let count = 1;

function doubleCount() {
  let newCount = count * 2;
  console.log(newCount);
  count = newCount;
}
function tripleCount() {
  let newCount = count * 3;
  console.log(newCount);
  count = newCount;
}

doubleCount();
doubleCount();
// console.log(newCount);

tripleCount();
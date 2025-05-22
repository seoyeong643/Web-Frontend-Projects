// goofy-case = first and last character capitalized
// ex: HellO WorlD
// Hello--->HellO
// HeLLO--->HelLO

function goofyCase(text) {
  // let firstLetter = text[0].toUpperCase();
  // let middle = text.slice(1, text.length - 1);
  // let lastLetter = text[text.length - 1].toUpperCase();
  // return firstLetter + middle + lastLetter;
  return (
    text[0].toUpperCase() +
    text.slice(1, text.length - 1) +
    text[text.length - 1].toUpperCase()
  );
}

let input = prompt("Enter some text");
console.log(goofyCase(input));

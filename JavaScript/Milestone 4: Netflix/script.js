/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

function chooseRandomGenre() {
  // Deliverable 1: Your code here 👇
  const genres = ["drama", "fantasy", "comedy"];
  const randomIndex = getRandomNumber(0, genres.length - 1);
  return genres[randomIndex];
}

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  if (genre === "random") {
    genre = chooseRandomGenre();
  }

  let selectedShows;
  switch (genre) {
    case "drama":
      selectedShows = dramaShows;
      break;
    case "fantasy":
      selectedShows = fantasyShows;
      break;
    case "comedy":
      selectedShows = comedyShows;
      break;
    default:
      return;
  }
  const randomIndex = getRandomNumber(0, selectedShows.length - 1);
  displayShow(selectedShows[randomIndex]);
}

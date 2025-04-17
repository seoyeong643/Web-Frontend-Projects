let favoriteAuthors = ["Pierce Brown", "Charles Dickens", "Mark Twain"];
console.log(favoriteAuthors);

favoriteAuthors.sort();
console.log(favoriteAuthors);

favoriteAuthors.push("Jane Austen");
console.log(favoriteAuthors);

// slice used to make a new array which is a slice or a part of an existing array
// let smallList = favoriteAuthors.slice(0, 3);
// console.log(smallList);

// splice allows us to go into the existing array and remove or change something
favoriteAuthors.splice(2, 1);
console.log(favoriteAuthors);
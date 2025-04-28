// Task 1
// Filter PLACES by type. If the type property of an object in PLACES matches the typePreference parameter.
function filterPlacesByType(typePreference) {
  // Step 1: Create a new filteredPlaces array and store it in a variable
  // Step 2: Loop through PLACES
  // Step 3: If a place object's type property matches the typePreference parameter, add it to filteredPlaces
  // Step 4: After the loop, return filteredPlaces
}

// Task 2
function createCard(place) {
  // Step 1: Create a new div element and store it in a variable
  // Step 2: Add the col class to the new div element
  // Step 3: Set the innerHTML of the div with a template string. It should resemble the structure shown in the readme. Interpolate the values for place.name, place.img, and place.location where needed. More info - https://wesbos.com/template-strings-html
  // Step 4: Return the element
}

// Task 3
function populateRecommendationCards(filteredPlaces) {
  // Step 1: Store the DOM element with the id of "recommendations" in a variable
  // Step 2: Clear the "recommendations" innerHTML
  // Step 3: Loop through the filteredPlaces array
  // Step 4: Create a card for each place using the createCard function
  // Step 5: Add/append each card to the recommendations DOM element
}

// Task 4
function findPlaceByName(placeName) {
  // Step 1: Loop through the PLACES array
  // Step 2: If a place object's name property matches the placeName parameter, return that place object
}

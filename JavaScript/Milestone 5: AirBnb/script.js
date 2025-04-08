function filterByCity(targetCity, listingCityArray) {
  const filteredArrayCity = [];

  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      filteredArrayCity.push(i);
    }
  }

  return filteredArrayCity;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  const filteredArrayPrice = [];

  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] > minPrice && listingPriceArray[i] < maxPrice) {
      filteredArrayPrice.push(i);
    }
  }

  return filteredArrayPrice;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!
  const filteredArrayTypes = [];

  for (let i = 0; i < listingTypeArray.length; i++) {
    if (targetTypes.includes(listingTypeArray[i])) {
      filteredArrayTypes.push(i);
    }
  }

  return filteredArrayTypes;
}

function showAllProducts(products) {
  // forEach
  products.forEach((product) => {
    newProductCard(product);
  });
}

function getFilteredProducts(productNames, query) {
  // filter
  return productNames.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
}

function getConvertedPrices(productPrices, currency) {
  // map
  const conversionRates = {
    usd: 1,
    gbp: 0.76, // 1 USD = 0.76 GBP
    jpy: 110.57, // 1 USD = 110.57 JPY
  };

  const rate = conversionRates[currency.toLowerCase()] || 1;

  return productPrices.map((price) => (price * rate).toFixed(2));
}

function getCartTotal(cartPrices) {
  // reduce
  return cartPrices.reduce((total, price) => total + price, 0);
}

showAllProducts(PRODUCTS);

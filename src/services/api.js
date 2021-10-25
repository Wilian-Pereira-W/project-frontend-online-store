export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dataJSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dataJSON;
}

export async function getProductsFromQuery(query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dataJSON;
}

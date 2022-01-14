const getStoredProducts = () => {
  const products = localStorage.getItem("products");
  let storedProducts = [];
  if (products) {
    storedProducts = JSON.parse(products);
  }
  return storedProducts;
};
const addToCart = (productId: number) => {
  let storedProducts = getStoredProducts();
  storedProducts.push(productId);
  localStorage.setItem("products", JSON.stringify(storedProducts));
};

const removeFromCart = (productId: number) => {
  let storedProducts = getStoredProducts();
  const filtered = storedProducts.filter(
    (value: number) => value !== productId
  );
  localStorage.removeItem("products");
  localStorage.setItem("products", JSON.stringify(filtered));
};

const isProductAlreadyAdded = (productId: number) => {
  const products = getStoredProducts();
  let isAlreadyAdded = false;
  for (let i = 0; i < products.length && !isAlreadyAdded; i++) {
    if (products[i] === productId) {
      isAlreadyAdded = true;
    }
  }
  return isAlreadyAdded;
};

export { addToCart, removeFromCart, isProductAlreadyAdded, getStoredProducts };

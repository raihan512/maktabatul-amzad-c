const getStoredData = (id) => {
  const shoppingCart = getShoppingCart();

  let quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("maktabatul-cart", JSON.stringify(shoppingCart));
  return shoppingCart;
};

const getShoppingCart = () => {
  let cart;
  const storedCart = localStorage.getItem("maktabatul-cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  } else {
    cart = {};
  }
  return cart;
};

export default getStoredData;

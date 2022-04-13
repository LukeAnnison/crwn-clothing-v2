import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains to add

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, incremeent quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cart items / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cart: [],
  setChart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  count: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    console.log({ cart, cartItems });
  };

  useEffect(() => {
let count = 0;
cartItems.map((cartItem) => count += cartItem.quantity);
setTotalItems(count);
console.log({count, totalItems})
  }, [cartItems])

  const value = {
    cart,
    setCart,
    addItemToCart,
    cartItems,
    totalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

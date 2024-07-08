import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = () => {};
  const clearCart = () => {};

  let data = { cart, addToCart, clearCart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

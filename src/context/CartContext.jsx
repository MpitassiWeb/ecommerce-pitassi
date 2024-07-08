import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const exists = (id) => {
    let inCar = cart.some((product) => product.id === id);
    return inCar;
  };
  const addToCart = (product) => {
    if (exists(product.id)) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };
  const deleteProduct = (id) => {
    let newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };

  let data = { cart, addToCart, clearCart, deleteProduct };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

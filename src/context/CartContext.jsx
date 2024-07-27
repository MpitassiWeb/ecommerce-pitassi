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
            quantity: product.quantity,
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
  const getQuantity = (id) => {
    let product = cart.find((product) => product.id === id);
    return product?.quantity;
  };
  const totalCash = () => {
    let totalPay = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return totalPay;
  };
  const totalProductsCart = () => {
    let totalProducts = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return totalProducts;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProduct,
    getQuantity,
    totalCash,
    totalProductsCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

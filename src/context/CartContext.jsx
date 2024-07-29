import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
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
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };
  const deleteProduct = (id) => {
    let newCart = cart.filter((product) => product.id !== id);
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Eliminar producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        Swal.fire({
          title: "¡Eliminado!",
          text: "Eliminaste correctamente el producto del carrito",
          icon: "success",
          confirmButtonColor: "#37DD3A",
        });
      }
    });
  };
  const clearCart = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Estas eliminando todos tus productos del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        localStorage.removeItem("cart");
        Swal.fire({
          title: "¡Eliminado!",
          text: "Eliminaste correctamente los productos del carrito",
          icon: "success",
          confirmButtonColor: "#37DD3A",
        });
      }
    });
  };
  const clearCart2 = () => {
    setCart([]);
    localStorage.removeItem("cart");
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
    clearCart2,
    deleteProduct,
    getQuantity,
    totalCash,
    totalProductsCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

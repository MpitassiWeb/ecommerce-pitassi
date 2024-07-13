import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import "../../products";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const ItemDetailContainer = () => {
  const { addToCart, getQuantity } = useContext(CartContext);
  const [item, setItem] = useState({});
  const { id } = useParams();

  let initialQuantity = getQuantity(Number(id));

  useEffect(() => {
    let product = products.find((product) => product.id === Number(id));
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    let itemAdd = { ...item, quantity };
    addToCart(itemAdd);
  };

  return <ItemDetail item={item} onAdd={onAdd} initialQuantity={initialQuantity}/>;
};

import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import "../../products";
import { products } from "../../products";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  let id = 2;

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import "../../products";
import { products } from "../../products";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let product = products.find((product) => product.id === Number(id));
    if (product) {
      setItem(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
};

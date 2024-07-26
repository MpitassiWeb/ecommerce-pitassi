import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { bd } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { addToCart, getQuantity } = useContext(CartContext);
  const [item, setItem] = useState({});
  const { id } = useParams();

  let initialQuantity = getQuantity(id);

  useEffect(() => {
    let refCollection = collection(bd, "products");
    let refDoc = doc(refCollection, id);
    let getProduct = getDoc(refDoc);

    getProduct.then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
    
  }, [id]);

  const onAdd = (quantity) => {
    let itemAdd = { ...item, quantity };
    addToCart(itemAdd);
  };

  return (
    <ItemDetail item={item} onAdd={onAdd} initialQuantity={initialQuantity} />
  );
};

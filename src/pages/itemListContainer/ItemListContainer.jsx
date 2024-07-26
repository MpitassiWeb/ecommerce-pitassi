import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { bd } from "../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let refCollection = collection(bd, "products");
    let consulta = refCollection;
    if (name) {
      consulta = query(refCollection, where("category", "==", name));
    }
    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let products = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(products);
    });
  }, [name]);

  return <ItemList products={items} greeting={greeting} />;
};

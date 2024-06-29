import React, { useState, useEffect } from "react";
import { products } from "../../products";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [errorMsg, setError] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let variable = true;
      let arrayCategory = products.filter(
        (product) => product.category === name
      );
      if (variable) {
        resolve(name ? arrayCategory : products);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);

  return <ItemList products={items} error={errorMsg} greeting={greeting} />;
};

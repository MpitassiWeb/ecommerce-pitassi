import React, { useState, useEffect } from "react";

import {products} from "../../products"
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greeting }) => {

  const [ items, setItems ] = useState ([])
  const [ errorMsg, setError ] = useState({})

  useEffect(()=>{
    const getProducts = new Promise((resolve, reject) => {
      let variable = true;
      if (variable){
        resolve(products);
      } else {
        reject({message: "error", codigo: "404"})
      }
    })
  
    getProducts
      .then((res)=>{
        setItems( res )
      })
      .catch((error) =>{
        setError(error)
      })
  }, []);

  return (
    <ItemList products={items} error={errorMsg} greeting={greeting} />
  );
};

import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { bd } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Grid, Skeleton } from "@mui/material";
import { styles } from "./styles";

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


  if (items.length === 0) {
    return (
      <Grid container spacing={2} padding={10}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Skeleton variant="rounded"  sx={styles.img}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="rounded" sx={styles.button}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Skeleton variant="rounded"  sx={styles.img}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="rounded" sx={styles.button}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Skeleton variant="rounded"  sx={styles.img}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="rounded" sx={styles.button}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Skeleton variant="rounded"  sx={styles.img}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="rounded" sx={styles.button}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Skeleton variant="rounded"  sx={styles.img}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="rounded" sx={styles.button}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Skeleton variant="rounded"  sx={styles.img}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="text" sx={styles.text}/>
          <Skeleton variant="rounded" sx={styles.button}/>
        </Grid>
      </Grid>
    );
  }

  return <ItemList products={items} greeting={greeting} />;
};

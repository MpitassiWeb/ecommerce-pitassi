import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { bd } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { Container, Grid, Skeleton } from "@mui/material";
import { styles } from "./styles";
import { toast } from "sonner";

export const ItemDetailContainer = () => {
  const { addToCart, getQuantity } = useContext(CartContext);
  const [item, setItem] = useState({});
  const [ready, setReady] = useState(false);
  const { id } = useParams();

  let initialQuantity = getQuantity(id);

  useEffect(() => {
    let refCollection = collection(bd, "products");
    let refDoc = doc(refCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ ...res.data(), id: res.id });
      setReady(true);
    });
  }, [id]);

  const onAdd = (quantity) => {
    let itemAdd = { ...item, quantity };
    addToCart(itemAdd);
    toast.success("Producto añadido correctamente", {
      duration: 2500,
      description: `${item.title}`,
    });
  };

  return ready ? (
    <ItemDetail item={item} onAdd={onAdd} initialQuantity={initialQuantity} />
  ) : (
    <>
      <Container maxWidth="lg" sx={{ padding: "30px" }}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <Skeleton variant="text" sx={styles.title} />
          </Grid>
          <Grid item md={7}>
            <Skeleton variant="rounded" sx={styles.img} />
          </Grid>
          <Grid item md={5} container direction="column" spacing={8}>
            <Grid item>
              <Skeleton variant="text" sx={styles.price} />
            </Grid>
            <Grid item>
              <Skeleton variant="text" sx={styles.description} />
              <Skeleton variant="text" sx={styles.description} />
              <Skeleton variant="text" sx={styles.description} />
              <Skeleton variant="text" sx={styles.description} />
              <Skeleton variant="text" sx={styles.description} />
            </Grid>
            <Grid item container justifyContent="center">
              <Skeleton variant="rounded" sx={styles.button} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

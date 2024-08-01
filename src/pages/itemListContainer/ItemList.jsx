import { Box, Grid, Typography } from "@mui/material";
import { ProductCard } from "../../components/productCard/ProductCard";
import { styles } from "./styles";

export const ItemList = ({ products, greeting }) => {
  return (
    <>
      <Typography variant="h1" sx={styles.titleItemList}>
        {greeting}
      </Typography>
      <Box sx={styles.box}>
        <Grid container component="section" sx={styles.gridSection}>
          {products.map((elemento) => {
            return (
              <ProductCard
                key={elemento.id}
                id={elemento.id}
                title={elemento.title}
                img={elemento.img}
                price={elemento.price}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

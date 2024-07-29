import { Grid, Typography } from "@mui/material";
import "./itemList.css";
import { ProductCard } from "../../components/productCard/ProductCard";

export const ItemList = ({ products, greeting }) => {
  return (
    <div className="containerGreeting">
      <Typography variant="h1">{greeting}</Typography>
      <div className="containerProducts">
        <Grid container spacing={2}>
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
      </div>
    </div>
  );
};

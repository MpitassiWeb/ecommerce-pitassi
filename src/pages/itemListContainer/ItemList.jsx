import { Grid } from "@mui/material";
import "./itemList.css";
import { ProductCard } from "../../components/productCard/ProductCard";

export const ItemList = ({ products, error, greeting }) => {
  return (
    <div className="containerGreeting">
      <h1>{greeting}</h1>
      <div className="containerProducts">
        <Grid container spacing={2}>
          {products.map((elemento) => {
            return (
              <ProductCard
                key={elemento.id}
                title={elemento.title}
                img={elemento.img}
                description={elemento.description}
                price={elemento.price}
              />
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

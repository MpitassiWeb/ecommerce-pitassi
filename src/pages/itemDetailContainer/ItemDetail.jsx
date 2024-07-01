import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import { CounterContainer } from "../../components/counter/CounterContainer";
import { ProductCard } from "../../components/productCard/ProductCard";
import styled from "@emotion/styled";

export const ItemDetail = ({ item }) => {
  const Img = styled("img");
  return (
    <>
      <Container>
        <Grid container>
          <Grid item md={12}>
            <Typography variant="h1">{item.title}</Typography>
          </Grid>
          <Grid item md={7}>
            <img
              src={item.img}
              style={{ width: "90%" }}
              alt={`Imagen de ${item.title}`}
            />
          </Grid>
          <Grid item md={5} justifyContent="center" alignItems="flex-start">
            <Typography variant="h2">$ {item.price}</Typography>
          </Grid>
          <Grid item md={5}>
            <Typography variant="p">{item.description}</Typography>
          </Grid>
        </Grid>
        <CounterContainer />
      </Container>
    </>
  );
};

import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import { CounterContainer } from "../../components/counter/CounterContainer";


export const ItemDetail = ({ item }) => {
  return (
    <>
      <Container maxWidth='lg' sx={{padding:"30px"}}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Typography variant="h1">{item.title}</Typography>
          </Grid>
          <Grid item md={7}>
            <img
              src={item.img}
              style={{ width: "100%" }}
              alt={`Imagen de ${item.title}`}
            />
          </Grid>
          <Grid item md={5} container direction="column" spacing={5}>
            <Grid item>
              <Typography variant="h2">$ {item.price}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="p">{item.description}</Typography>
            </Grid>
            <Grid item>
              <CounterContainer />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

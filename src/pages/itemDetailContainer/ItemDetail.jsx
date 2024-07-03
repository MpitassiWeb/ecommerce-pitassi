import { Container, Grid, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CounterContainer } from "../../components/counter/CounterContainer";

export const ItemDetail = ({ item }) => {
  let lines = [];
  let id = 0;
  if (item.description) {
    lines = item.description.split("*");
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ padding: "30px" }}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Typography variant="h1">{item.title}</Typography>
          </Grid>
          <Grid item md={7}>
            <img
              src={item.img}
              style={{ width: "100%" , borderRadius: "20px"}}
              alt={`Imagen de ${item.title}`}
            />
          </Grid>
          <Grid item md={5} container direction="column" spacing={5}>
            <Grid item>
              <Typography variant="h2">$ {item.price}</Typography>
            </Grid>
            <Grid item>
              {lines.map((line) => {
                id++;
                return (
                  <Typography key={id} variant="body1">
                    <ChevronRightIcon fontSize="small"/>{line}
                  </Typography>
                );
              })}
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

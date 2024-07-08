import { Container, Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CounterContainer } from "../../components/counter/CounterContainer";

export const ItemDetail = ({ item, onAdd }) => {
  let lines = [];
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
              style={{ width: "100%", borderRadius: "15px" }}
              alt={`Imagen de ${item.title}`}
            />
          </Grid>
          <Grid item md={5} container direction="column" spacing={8}>
            <Grid item>
              <Typography variant="h2">$ {item.price}</Typography>
            </Grid>
            <Grid item>
              {lines.map((line) => {
                return (
                  <Typography key={line} variant="body1">
                    <ChevronRightIcon fontSize="small" />
                    {line}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item container justifyContent="center">
              <CounterContainer onAdd={onAdd} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

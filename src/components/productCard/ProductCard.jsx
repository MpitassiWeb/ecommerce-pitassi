import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";

export const ProductCard = ({ title, img, description, price }) => {
  return (
    <Grid item xs={10} sm={8} md={6} lg={4}>
      <Card>
        <CardMedia sx={{ height: 140 }} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {`$ ${price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Comprar</Button>
          <Button size="small">Agregar a favoritos</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
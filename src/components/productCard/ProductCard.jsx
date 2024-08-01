import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styles } from "./styles";

export const ProductCard = ({ id, title, img, price, stock }) => {
  return (
    <Grid item xs={12} sm={10} md={6} lg={4}>
      <Card component="figure" sx={styles.card}>
        <CardMedia sx={styles.cardMedia} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="h6" sx={styles.price}>
            {`$ ${price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${id}`}>
            <Button variant="contained">Ver más</Button>
          </Link>
          <Button size="small">
            <FavoriteIcon />
          </Button>
          {
            (stock === 0 && (
              <Typography variant="h6" sx={{ color: "#DD3333" }}>
                Sin stock
              </Typography>
            ),
            stock === 1 && (
              <Typography variant="h6" sx={{ color: "#DD3333" }}>
                Última unidad
              </Typography>
            ))
          }
        </CardActions>
      </Card>
    </Grid>
  );
};

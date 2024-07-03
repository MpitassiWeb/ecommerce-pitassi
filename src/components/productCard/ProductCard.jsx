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

export const ProductCard = ({ id, title, img, price }) => {
  return (
    <Grid item xs={10} sm={8} md={6} lg={4}>
      <Card>
        <CardMedia sx={{ height: 300 }} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontSize: "1.8em", paddingTop: "20px", textAlign: "end" }}
          >
            {`$ ${price}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${id}`}>
            <Button size="small" variant="contained">
              Ver más
            </Button>
          </Link>
          <Button size="small">
            <FavoriteIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, ButtonBase, Grid, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { styles } from "./styles";

export const Cart = () => {
  const { cart, clearCart, deleteProduct, totalCash } = useContext(CartContext);

  let totalPay = totalCash();

  return (
    <Grid container padding="100px" display="flex" justifyContent="center">
      {cart.map((elemento) => {
        return (
          <Paper key={elemento.id} sx={styles.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={styles.buttonBase}>
                  <img
                    alt="complex"
                    src={elemento.img}
                    style={{ width: "100%", borderRadius: "15px" }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {elemento.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {elemento.description}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {`Cantidad: ${elemento.quantity}`}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={() => deleteProduct(elemento.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    $ {elemento.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
      {cart.length > 0 ? (
        <Grid item container justifyContent="center" spacing={2}>
          <Grid item>
            <Typography variant="h5">Total a pagar: $ {totalPay}</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={clearCart}>
              Vaciar carrito
            </Button>
          </Grid>
          <Grid item>
            <Link to="/checkout">
              <Button variant="contained">Comprar</Button>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h3">El carrito está vacío</Typography>
      )}
    </Grid>
  );
};

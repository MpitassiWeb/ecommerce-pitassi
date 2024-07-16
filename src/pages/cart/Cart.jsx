import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, ButtonBase, Grid, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, clearCart, deleteProduct, totalCash } = useContext(CartContext);

  let totalPay = totalCash();

  return (
    <Grid container padding="100px" display="flex" justifyContent="center">
      {cart.map((elemento) => {
        return (
          <Paper
            key={elemento.id}
            sx={{
              margin: "10px",
              p: 2,
              maxWidth: 1000,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128 }}>
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
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {elemento.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {elemento.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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
                  <Typography variant="subtitle1" component="div">
                    $ {elemento.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
      {
        cart.length > 0 ? (
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
            <Link to="/checkout"><Button variant="contained">Comprar</Button></Link>
          </Grid>
        </Grid>) : (<Typography variant="h3">El carrito está vacío</Typography>)
      }
      
    </Grid>
  );
};

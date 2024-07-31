import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { bd } from "../../firebaseConfig";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { cart, totalCash, clearCart2 } = useContext(CartContext);
  const navigate = useNavigate();
  let totalPay = totalCash();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: { nombre: "", telefono: "", email: "" },
    onSubmit: ({ nombre, telefono, email }) => {
      let order = {
        buyer: { nombre, telefono, email },
        items: cart,
        total: totalPay,
      };
      let refCollection = collection(bd, "orders");
      addDoc(refCollection, order)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "¡Felicitaciones!",
            text: `Compra realizada con éxito. Su ticket es: ${res.id}`,
            confirmButtonColor: "#37DD3A",
          });
          let refCollection = collection(bd, "products");
          cart.forEach((element) => {
            let refDoc = doc(refCollection, element.id);
            updateDoc(refDoc, { stock: element.stock - element.quantity });
          });
        })
        .finally(() => {
          clearCart2();
          navigate("/");
        });
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo obligatorio"),
      telefono: Yup.number()
        .typeError("Campo numérico")
        .required("Campo obligatorio"),
      email: Yup.string()
        .email("Colocar un Email válido")
        .required("Campo obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h3" textAlign="center">
        Completar los datos
      </Typography>
      <Container
        sx={{ maxWidth: "80%", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#141517" : "#f8f8f8",
            borderRadius: "10px",
            margin: "50px",
            width: "50%",
            padding: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
              name="nombre"
              label="nombre"
              variant="outlined"
              type="text"
              sx={{ padding: "7px" }}
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
              fullWidth
            />
            <TextField
              name="telefono"
              label="telefono"
              type="tel"
              variant="outlined"
              sx={{ padding: "7px" }}
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
              fullWidth
            />
            <TextField
              name="email"
              label="email"
              type="email"
              variant="outlined"
              sx={{ padding: "7px" }}
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
              fullWidth
            />
          </Box>
          <Box
            sx={{ padding: "10px", display: "flex", justifyContent: "center" }}
          >
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </Box>
        </Box>
      </Container>
    </form>
  );
};

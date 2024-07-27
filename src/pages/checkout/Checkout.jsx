import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { bd } from "../../firebaseConfig";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { cart, totalCash, clearCart } = useContext(CartContext);
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
      addDoc(refCollection, order).then((res) => {
        Swal.fire({
          icon: "success",
          title: "¡Felicitaciones!",
          text: `Compra realizada con éxito. Su ticket es: ${res.id}`,
        });
        let refCollection = collection(bd, "products");
        cart.forEach((element) => {
          let refDoc = doc(refCollection, element.id);
          updateDoc(refDoc, { stock: element.stock - element.quantity });
        });
      }).finally(()=>{
        clearCart();
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
      <Box
        sx={{
          height: "250px",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          name="nombre"
          label="nombre"
          variant="outlined"
          type="text"
          onChange={handleChange}
          sx={{ width: "50%", padding: "10px" }}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          name="telefono"
          label="telefono"
          type="tel"
          variant="outlined"
          onChange={handleChange}
          sx={{ width: "50%", padding: "10px" }}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />
        <TextField
          name="email"
          label="email"
          type="email"
          variant="outlined"
          onChange={handleChange}
          sx={{ width: "50%", padding: "10px" }}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
      </Box>
      <Box sx={{ padding: "10px", display: "flex", justifyContent: "center" }}>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Box>
    </form>
  );
};

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Checkout = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: { nombre: "", telefono: "", email: "" },
    onSubmit: ({nombre, telefono, email}) => {},
    validationSchema: Yup.object({
      nombre: Yup.string().required("Campo obligatorio"),
      telefono: Yup.number().typeError("Campo numérico").required("Campo obligatorio"),
      email: Yup.string().email("Colocar un Email válido").required("Campo obligatorio"),
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

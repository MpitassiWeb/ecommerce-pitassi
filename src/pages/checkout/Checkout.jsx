import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export const Checkout = () => {
  return (
    <form>
      <Typography variant="h3" textAlign="center">
        Datos de facturación
      </Typography>
      <Box sx={{ padding: "10px", display: "flex", justifyContent: "center" }}>
        <Box>
          <TextField
            name="nombre"
            label="nombre"
            variant="outlined"
            sx={{ width: "50%", padding: "10px" }}
          />
          <TextField
            name="apellido"
            label="apellido"
            variant="outlined"
            sx={{ width: "50%", padding: "10px" }}
          />
          <TextField
            name="direccion"
            label="direccion"
            variant="outlined"
            sx={{ width: "50%", padding: "10px" }}
          />
          <TextField
            name="provincia"
            label="provincia"
            variant="outlined"
            sx={{ width: "50%", padding: "10px" }}
          />
          <TextField
            name="ciudad"
            label="ciudad"
            variant="outlined"
            sx={{ width: "50%", padding: "10px" }}
          />
          <TextField
            name="cp"
            label="cp"
            variant="outlined"
            sx={{ width: "50%", padding: "10px" }}
          />
        </Box>
      </Box>
      <Box sx={{ padding: "10px", display: "flex", justifyContent: "center" }}>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Box>
    </form>
  );
};

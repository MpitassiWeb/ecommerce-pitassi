import { Box, Button, Container, Typography } from "@mui/material";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <Box width={230}>
      { contador > 1 && (
        <Typography variant="span">Ya tenés unidades en el carrito</Typography>
      )}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button variant="contained" onClick={restar}>
          -
        </Button>
        <Typography variant="span" p={3}>
          {contador}
        </Typography>
        <Button variant="contained" onClick={sumar}>
          +
        </Button>
      </Box>
      <Box>
        <Button fullWidth variant="contained" onClick={onAdd}>
          Añadir al carrito
        </Button>
      </Box>
    </Box>
  );
};

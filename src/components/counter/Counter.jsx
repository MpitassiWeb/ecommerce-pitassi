import { Box, Button, Typography } from "@mui/material";
import { styles } from "./styles";

export const Counter = ({ restar, stock, contador, sumar, onAdd }) => {
  return (
    <Box width={230}>
      {stock === 1 && (
        <Typography sx={styles.tyUltimaUnidad}>Última unidad</Typography>
      )}
      {stock > 0 ? (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
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
        </>
      ) : (
        <Typography variant="h5" textAlign="center">
          Producto agotado
        </Typography>
      )}
    </Box>
  );
};

import { Button, Typography } from "@mui/material";

export const Counter = ({ restar, contador, sumar }) => {
  return (
    <div style={{ padding: "10px" }}>
      <Button variant="contained" onClick={restar}>
        -
      </Button>
      <Typography variant="span" p={3}>
        {contador}
      </Typography>
      <Button variant="contained" onClick={sumar}>
        +
      </Button>
    </div>
  );
};

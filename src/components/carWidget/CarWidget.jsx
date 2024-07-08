import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CarWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Badge badgeContent={cart.length} showZero color="secondary">
      <Link to="/cart">
        <ShoppingCartIcon color="#dddd32" />
      </Link>
    </Badge>
  );
};

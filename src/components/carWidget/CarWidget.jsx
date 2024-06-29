import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const CarWidget = () => {
  return (
    <Badge badgeContent={0} showZero color="secondary">
      <Link to="/cart">
        <ShoppingCartIcon color="#dddd32" />
      </Link>
    </Badge>
  );
};

import { CarWidget } from "../carWidget/CarWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="navBarContainer">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dqcn00akv/image/upload/v1722178072/OptitechStoreLogo_s3sln2.png"
          alt="Logo de OptiTech Store"
        />
      </Link>

      <nav>
        <Link to="/">Todos</Link>
        <Link to="/category/Memorias">Memorias</Link>
        <Link to="/category/Discos">Discos</Link>
        <Link to="/category/Perifericos">Periféricos</Link>
      </nav>

      <CarWidget />
    </header>
  );
};

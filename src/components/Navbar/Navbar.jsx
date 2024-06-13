import { CarWidget } from "../carWidget/CarWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navBarContainer">
      <img
        src="https://res.cloudinary.com/dqcn00akv/image/upload/v1718233130/OptiTech_Store_O-removebg-preview_yh7eru.png"
        alt="Logo de OptiTech Store"
      />

      <ul>
        <li>
          <a href="#">Todos</a>
        </li>
        <li>
          <a href="#">Memorias</a>
        </li>
        <li>
          <a href="#">Discos</a>
        </li>
        <li>
          <a href="#">Periféricos</a>
        </li>
      </ul>

      <CarWidget />
    </header>
  );
};

export default Navbar;

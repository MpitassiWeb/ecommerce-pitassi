import { Link } from "react-router-dom";
import "./error404.css"

export const Error404 = () => {
  return (
    <div className="container">
      <Link to="/"><img
        src="https://res.cloudinary.com/dqcn00akv/image/upload/v1718232855/OptiTech_Store_dn6qwe.png"
        alt="Logo de OptiTech Store"
      /></Link>
      <h1>Error 404 - Not Found</h1>
    </div>
  );
};

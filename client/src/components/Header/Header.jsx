import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Recetas</Link>
        <Link to="/favorites">Favoritos</Link>
      </nav>
    </header>
  );
};

export default Header;


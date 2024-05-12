import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Salla Närhi</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Landing page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/persons">Persons</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

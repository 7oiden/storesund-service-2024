import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar({ handleToggle, isMenuOpen }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo" aria-label="Return to homepage">
        Home
      </Link>
      <ul className="navbar__list">
        <li>
          <NavLink
            to="installation"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            <div>Montering</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="service"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            <div>Service</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="repair"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            <div>Reparasjon</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            <div>Kontakt</div>
          </NavLink>
        </li>
      </ul>
      <div className="nav__toggle" onClick={handleToggle}>
        {isMenuOpen ? <MdClose /> : <MdMenu />}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

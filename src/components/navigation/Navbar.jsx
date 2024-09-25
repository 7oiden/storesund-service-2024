import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../../assets/storesund-logo.png";

export default function Navbar({ handleToggle, isMenuOpen }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo" aria-label="Return to homepage">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="navbar__list">
        <li>
          <NavLink
            to="installation"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            {({ isActive }) => (
              <>
                Montering
                {isActive && <div className="navbar__marker"></div>}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="service"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            {({ isActive }) => (
              <>
                Service
                {isActive && <div className="navbar__marker"></div>}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="repair"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            {({ isActive }) => (
              <>
                Reparasjon
                {isActive && <div className="navbar__marker"></div>}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            {({ isActive }) => (
              <>
                Kontakt
                {isActive && <div className="navbar__marker"></div>}
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <div className="navbar__toggle" onClick={handleToggle}>
        {isMenuOpen ? <MdClose /> : <MdMenu />}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

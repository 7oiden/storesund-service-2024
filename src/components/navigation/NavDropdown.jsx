import { Link, NavLink, useLocation } from "react-router-dom";

export default function NavDropdown({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="dropdown">
      <ul>
        <li>
          <NavLink
            to="installation"
            className={({ isActive }) =>
              isActive
                ? "dropdown__link dropdown__link--active"
                : "dropdown__link"
            }
          >
            <div>Montering</div>
          </NavLink>
          <NavLink
            to="service"
            className={({ isActive }) =>
              isActive
                ? "dropdown__link dropdown__link--active"
                : "dropdown__link"
            }
          >
            <div>Service</div>
          </NavLink>
          <NavLink
            to="repair"
            className={({ isActive }) =>
              isActive
                ? "dropdown__link dropdown__link--active"
                : "dropdown__link"
            }
          >
            <div>Reparasjon</div>
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "dropdown__link dropdown__link--active"
                : "dropdown__link"
            }
          >
            <div>Kontakt</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

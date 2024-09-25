import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function NavDropdown({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      {isMenuOpen ? (
        <nav className="dropdown">
          <ul className="dropdown__list">
            <li>
              <NavLink
                to="installation"
                className={({ isActive }) =>
                  isActive
                    ? "dropdown__link dropdown__link--active"
                    : "dropdown__link"
                }
              >
                {({ isActive }) => (
                  <>
                    Montering
                    {isActive && <div className="dropdown__marker"></div>}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="service"
                className={({ isActive }) =>
                  isActive
                    ? "dropdown__link dropdown__link--active"
                    : "dropdown__link"
                }
              >
                {({ isActive }) => (
                  <>
                    Service
                    {isActive && <div className="dropdown__marker"></div>}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="repair"
                className={({ isActive }) =>
                  isActive
                    ? "dropdown__link dropdown__link--active"
                    : "dropdown__link"
                }
              >
                {({ isActive }) => (
                  <>
                    Reparasjon
                    {isActive && <div className="dropdown__marker"></div>}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive
                    ? "dropdown__link dropdown__link--active"
                    : "dropdown__link"
                }
              >
                {({ isActive }) => (
                  <>
                    Kontakt
                    {isActive && <div className="dropdown__marker"></div>}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}

NavDropdown.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

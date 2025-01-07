import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function NavDropdown({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(isMenuOpen);

  const dropdown = useSpring({
    height: isMenuOpen ? "12rem" : "0", // Slide in from right when opening
    config: { duration: 250 },
    onRest: () => {
      if (!isMenuOpen) setIsVisible(false); // Hide after closing animation completes
    },
  });

  useEffect(() => {
    if (isMenuOpen) setIsVisible(true); // Show immediately when opening
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false); // Close dropdown on route change
  }, [location, setIsMenuOpen]);

  return (
    <>
      {isVisible && ( // Conditionally render the dropdown only when isVisible is true
        <animated.nav style={dropdown} className="dropdown">
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
                {/* {({ isActive }) => ( */}
                  <>
                    Montering
                    {/* {isActive && <div className="dropdown__marker"></div>} */}
                  </>
                {/* )} */}
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
                {/* {({ isActive }) => ( */}
                  <>
                    Service
                    {/* {isActive && <div className="dropdown__marker"></div>} */}
                  </>
                {/* )} */}
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
                {/* {({ isActive }) => ( */}
                  <>
                    Reparasjon
                    {/* {isActive && <div className="dropdown__marker"></div>} */}
                  </>
                {/* )} */}
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
                {/* {({ isActive }) => ( */}
                  <>
                    Kontakt
                    {/* {isActive && <div className="dropdown__marker"></div>} */}
                  </>
                {/* )} */}
              </NavLink>
            </li>
          </ul>
        </animated.nav>
      )}
    </>
  );
}

NavDropdown.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

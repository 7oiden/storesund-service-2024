import { useState, useRef } from "react";
import Navbar from "../components/navigation/Navbar";
import NavDropdown from "../components/navigation/NavDropdown";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggle() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <header className="header">
      <Navbar handleToggle={handleToggle} isMenuOpen={isMenuOpen} />
      <NavDropdown isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}

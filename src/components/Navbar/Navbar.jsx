import { useRef,useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
	const navRef = useRef();
	const [isMenuOpen, setMenuOpen] = useState(false);
  
	const toggleMenu = () => {
	  setMenuOpen(!isMenuOpen);
	};
  
	const closeMenu = () => {
	  setMenuOpen(false);
	};
  const location = useLocation();

  return (
    <header>
      <Link to="/">
        <h3>JUDE</h3>
      </Link>
      <nav ref={navRef} className={isMenuOpen ? "responsive_nav" : ""}>
        <Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/products?isNew=true" onClick={closeMenu}
          className={location.pathname === "/products" ? "active" : ""}
        >
          New Arrivals
        </Link>
        <Link
          to="/products" onClick={closeMenu}
          className={location.pathname === "/products" ? "active" : ""}
        >
          Men
        </Link>
        <Link to="/about" onClick={closeMenu} className={location.pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <Link to="/contact" onClick={closeMenu} className={location.pathname === "/contact" ? "active" : ""}>
          Contact
        </Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={toggleMenu}
        >
          <FaTimes />
		</button>
      </nav>
	  <button
        className="nav-btn"
        onClick={toggleMenu}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

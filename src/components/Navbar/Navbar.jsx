import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
      <a href="/"> <h3>JUDE</h3></a>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/products/1">New Arrivals</a>
				<a href="/products/2">Men</a>
				<a href="/about">About</a>
       			<a href="/contact">Contact</a>
      
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
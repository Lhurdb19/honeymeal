import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { HiOutlineMenu } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handleIsMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <div className="navbar-container">
        <Link to="/">Honey Meal</Link>
      <div className={`nav-link ${isMobile ? "mobile active" : ""}`}>
       <li><Link to={'/'} onClick={handleIsMobile}>Home</Link></li>
       <li><Link to={'/about'} onClick={handleIsMobile}>About</Link></li>
       <li><Link to={'/contact'} onClick={handleIsMobile}>Contact</Link></li>
      </div>

      <div className="toggle-menu" onClick={handleIsMobile}>
        {isMobile ? <HiMiniXMark /> : <HiOutlineMenu />}
      </div>
      </div>
    </>
  );
}

export default Navbar;

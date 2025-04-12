import { useState } from "react";
import ThemeToggle from "../Components/ThemeToggle";
import "../Css/Navbar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left_logo">
          <h2 className="logo">KnotWithNK💍</h2>
        </div>

        <div className={`navbar-right_links ${menuOpen ? "open" : ""}`}>
          <ul className="nav-ul">
            <li className="nav-li"><a href="#">Home</a></li>
            <li className="nav-li"><a href="#About">About Us</a></li>
            <li className="nav-li"><a href="#Wed">Wedding Plan</a></li>
            <li className="nav-li"><a href="#Contact">Contact Us</a></li>
          </ul>
          <ThemeToggle />
        </div>

        <div className="nav-socials">
          <ul className="nav-ul">
            <li className="nav-li">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </li>
            <li className="nav-li">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Navbar;

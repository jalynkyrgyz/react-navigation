import { useState } from "react";

import "./navbar.scss";
import menuItem from "../../images/iconmonstr-menu-1.svg";

function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    const showMenu = () => {
        setMenuActive(!menuActive);
    }
  return (
    <nav className="navbar">
        <div className="container navbar__container">
            <a href="/" className="navbar__logo">
                Logo
            </a>
            <button onClick={showMenu} className="navbar__toggle">
                <img src={menuItem} alt="asdf"></img>
            </button>
            <div className={menuActive ? "navbar__menu--show" : "navbar__menu"}>
            <a href="/" className="navbar__menu-link active">Home</a>
            <a href="/" className="navbar__menu-link">About</a>
            <a href="/" className="navbar__menu-link">Services</a>
            <a href="/" className="navbar__menu-link">Contacts</a>
        </div>
        </div>
       
    </nav>
  );
}

export default Navbar
import { useState } from "react";
import userICO from "../assets/user-ico-placeholder.ico";
import "./Nav.css";

function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav id="navbar">
            <div className="nav-left">
                <button
                    className={`hamburger ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-list ${open ? "show" : ""}`}>
                    <li><a href={"./"}>Home</a></li>
                    <li><a href={"./about"}>About Garbot</a></li>
                    <li><a href={"./contact"}>Contact Us</a></li>
                </ul>
            </div>

            <img
                src={userICO}
                alt="user-profile"
                id="navbar-users"
            />
        </nav>
    );
}

export default Nav;
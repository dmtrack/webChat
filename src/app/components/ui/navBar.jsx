import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/chats">
                    Rooms
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;

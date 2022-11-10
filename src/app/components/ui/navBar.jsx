import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../utils/sessionStorage.service";
const NavBar = () => {
    const currentUser = getUser();
    return (
        <ul className="nav">
            {currentUser ? (
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/chats">
                        Rooms
                    </Link>
                </li>
            ) : null}
        </ul>
    );
};

export default NavBar;

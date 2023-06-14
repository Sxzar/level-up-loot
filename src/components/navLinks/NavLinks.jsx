import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
    return (
        <div className="lul__navLinks">
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>

                <li>
                    <Link to="/deals">Deals</Link>
                </li>

                <li>
                    <Link to="/news">News</Link>
                </li>

                <li>
                    <Link to="/freeGames">Free</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavLinks;

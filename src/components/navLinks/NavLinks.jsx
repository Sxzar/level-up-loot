import React from "react";
import "./NavLinks.css";

const NavLinks = () => {
    return (
        <div className="lul__navLinks">
            <ul>
                <li>
                    <a href="/">Home </a>
                </li>

                <li>
                    <a href="/deals">Deals</a>
                </li>

                <li>
                    <a href="/news">News</a>
                </li>

                <li>
                    <a href="/freeGames">Free</a>
                </li>
            </ul>
        </div>
    );
};

export default NavLinks;

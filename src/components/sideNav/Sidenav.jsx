import React from "react";
import "./SideNav.css";

const SideNav = () => {
    return (
        <div className="lul__sideNav">
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

export default SideNav;

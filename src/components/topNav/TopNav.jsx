import React from "react";
import { Cta, MobileMenu, Search } from "../";
import logoLarge from "../../assets/img/logo-large.svg";
import logoSmall from "../../assets/img/logo-small.svg";
import "./TopNav.css";

const TopNav = () => {
    return (
        <div className="lul__navbar">
            <div className="lul__navar-elements">
                <div className="lul__navbar-elements_logo">
                    <a href="/">
                        <picture>
                            <source
                                media="(max-width:1000px)"
                                srcSet={logoSmall}
                            />
                            <img src={logoLarge} alt="logo" />
                        </picture>
                    </a>
                </div>
                <Search />
            </div>
            <Cta />
            <MobileMenu />
        </div>
    );
};

export default TopNav;

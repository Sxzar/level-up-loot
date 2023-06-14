import React from "react";
import logoLarge from "../../assets/img/logo-large.svg";
import logoSmall from "../../assets/img/logo-small.svg";
import { Link } from "react-router-dom";
import { Cta, MobileMenu, Search } from "../../components";
import "./TopNav.css";

const TopNav = () => {
    return (
        <div className="lul__navbar">
            <div className="lul__navar-elements">
                <div className="lul__navbar-elements_logo">
                    <Link to="/">
                        <picture>
                            <source
                                media="(max-width:1000px)"
                                srcSet={logoSmall}
                            />
                            <img src={logoLarge} alt="logo" />
                        </picture>
                    </Link>
                </div>
                <Search />
            </div>
            <Cta />
            <MobileMenu />
        </div>
    );
};

export default TopNav;

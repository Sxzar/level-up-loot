import React from "react";
import logoLarge from "../../assets/img/logo-large.svg";
import logoSmall from "../../assets/img/logo-small.svg";
import Cta from "../cta/Cta";
import Search from "../search/Search";
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
        </div>
    );
};

export default TopNav;

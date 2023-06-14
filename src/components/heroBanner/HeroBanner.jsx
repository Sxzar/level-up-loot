import React from "react";
import { GlassButton } from "../";
import HeroImgSmall from "../../assets/img/hero-small.webp";
import HeroImg from "../../assets/img/hero.webp";
import "./HeroBanner.css";

const HeroBanner = () => {
    return (
        <div className="lul__heroBanner">
            <div className="lul__heroBanner-content section__margin section__padding">
                <h1>
                    Level Up Your
                    <br /> Gaming Experience!
                </h1>
                <h3>
                    Discover Exclusive Deals, Breaking
                    <br /> News, and Free Games
                </h3>
                <GlassButton content="Subscribe" action="/" />
            </div>
            <picture>
                <source media="(min-width: 768px)" srcSet={HeroImg} />
                <img src={HeroImgSmall} alt="Abaddon" />
            </picture>
        </div>
    );
};

export default HeroBanner;

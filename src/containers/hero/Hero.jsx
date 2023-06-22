import React from "react";
import { HeroBanner, HeroGame } from "../../components";
import "./Hero.css";

const Hero = () => {
	return (
		<div className="lul__hero">
			<HeroBanner />
			<HeroGame />
		</div>
	);
};

export default Hero;

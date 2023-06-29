import React from "react";
import { Link } from "react-router-dom";
import logoLarge from "../../assets/img/logo-large.svg";
import logoSmall from "../../assets/img/logo-small.svg";
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
			<Cta title="Subscribe" action="modal" />
			<MobileMenu />
		</div>
	);
};

export default TopNav;

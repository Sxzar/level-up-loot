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
					<Link to="/free-games">Free</Link>
				</li>

				<li>
					<Link to="/game-deals">Deals</Link>
				</li>

				<li>
					<Link to="/gaming-news">News</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavLinks;

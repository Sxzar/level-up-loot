import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = ({ click }) => {
	return (
		<div className="lul__navLinks">
			<ul>
				<li>
					<Link to="/" onClick={click}>
						Home{" "}
					</Link>
				</li>

				<li>
					<Link to="/free-games" onClick={click}>
						Free
					</Link>
				</li>

				<li>
					<Link to="/game-deals" onClick={click}>
						Deals
					</Link>
				</li>

				<li>
					<Link to="/gaming-news" onClick={click}>
						News
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavLinks;

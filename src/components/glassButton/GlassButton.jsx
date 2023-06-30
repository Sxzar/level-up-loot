import React from "react";
import { Link } from "react-router-dom";
import "./GlassButton.css";

const GlassButton = ({ action, content, external }) => {
	return (
		<div className="lul__glassButton">
			{external ? (
				<Link
					to={action}
					className="lul__glassButton-btn"
					target="_blank"
					rel="noopener noreferrer"
				>
					{content}
				</Link>
			) : (
				<Link to={action} className="lul__glassButton-btn">
					{content}
				</Link>
			)}
		</div>
	);
};

export default GlassButton;

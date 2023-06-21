import React from "react";
import { Link } from "react-router-dom";
import "./GlassButton.css";

const GlassButton = ({ action, content }) => {
    return (
        <div className="lul__glassButton">
            <Link to={action} className="lul__glassButton-btn">
                {content}
            </Link>
        </div>
    );
};

export default GlassButton;

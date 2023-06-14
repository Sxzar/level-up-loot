import React from "react";
import { Link } from "react-router-dom";
import "./GlassButton.css";

const GlassButton = (props) => {
    return (
        <div className="lul__glassButton">
            <Link to={props.action} className="lul__glassButton-btn">
                {props.content}
            </Link>
        </div>
    );
};

export default GlassButton;

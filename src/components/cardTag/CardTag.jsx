import React from "react";
import "./CardTag.css";

const CardTag = ({ title }) => {
    return (
        <div className="lul__tag">
            <div className="lul__tag-inner">{title}</div>
        </div>
    );
};

export default CardTag;

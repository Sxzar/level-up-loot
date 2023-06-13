import React from "react";
import "./Search.css";

const Search = () => {
    return (
        <div className="lul__search">
            <input type="text" placeholder="Search game" />
            <span className="lul__search-icon"></span>
        </div>
    );
};

export default Search;

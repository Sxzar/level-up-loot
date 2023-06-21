import React from "react";
import { useNavigate } from "react-router-dom";

import "./Search.css";

const Search = () => {
    const [search, setSearch] = React.useState("");
    const navigate = useNavigate();

    const handleSearch = async () => {
        // Check if the search input is empty
        if (search.trim().length !== 0) {
            navigate(`/search-results?search=${search}`, {
                state: { search },
            });
            setSearch("");
        }
    };

    const keyDownHandler = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="lul__search">
            <input
                type="text"
                placeholder="Search game"
                value={search}
                onKeyDown={keyDownHandler}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <span className="lul__search-icon" onClick={handleSearch}></span>
        </div>
    );
};

export default Search;

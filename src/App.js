import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SideNav, TopNav } from "./containers";
import { Game, Home, SearchResults } from "./pages";

const App = () => {
    return (
        <div className="app">
            <TopNav />
            <div className="app__body">
                <SideNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search-results" element={<SearchResults />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;

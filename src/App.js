import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SideNav, TopNav } from "./containers";
import { Home } from "./pages";

const App = () => {
    return (
        <div className="app">
            <TopNav />
            <div className="app__body">
                <SideNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;

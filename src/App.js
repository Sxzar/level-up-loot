import React from "react";
import "./App.css";
import { SideNav, TopNav } from "./components";
import { ScreenContainer } from "./containers";

const App = () => {
    return (
        <div className="app">
            <TopNav />
            <div className="app__body">
                <SideNav />
                <ScreenContainer />
            </div>
        </div>
    );
};

export default App;

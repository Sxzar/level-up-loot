import React from "react";
import "./App.css";
import { FreeGames, GameDeals, Hero, Navigation, News } from "./containers";

const App = () => {
    return (
        <div className="app">
            <Navigation />
            <Hero />
            <FreeGames />
            <GameDeals />
            <News />
        </div>
    );
};

export default App;

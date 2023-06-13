import React from "react";
import { FreeGames, GameDeals, Hero, News } from "../../containers";
import "./ScreenContainer.css";

const ScreenContainer = () => {
    return (
        <div>
            <Hero />
            <FreeGames />
            <GameDeals />
            <News />
        </div>
    );
};

export default ScreenContainer;

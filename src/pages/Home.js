import React from "react";
import { FreeGames, GameDeals, Hero, News } from "../containers";

const Home = () => {
    return (
        <div className="lul__home-container full-width">
            <Hero />
            <FreeGames />
            <GameDeals />
            <News />
        </div>
    );
};

export default Home;

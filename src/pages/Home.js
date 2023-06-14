import React from "react";
import { FreeGames, GameDeals, Hero, News } from "../containers";

const Home = () => {
    return (
        <div>
            <Hero />
            <FreeGames />
            <GameDeals />
            <News />
        </div>
    );
};

export default Home;

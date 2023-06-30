import React from "react";
import { FreeGames, GameDeals, Hero, News, Subscribe } from "../containers";

const Home = () => {
	return (
		<div className="lul__home-container full-width">
			<Hero />
			<FreeGames />
			<GameDeals />
			<News />
			<Subscribe />
		</div>
	);
};

export default Home;

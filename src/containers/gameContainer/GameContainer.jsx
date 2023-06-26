import React from "react";
import { FreeGameDetails, GameDealDetails, Loader } from "../../components";
import "./GameContainer.css";

const GameContainer = ({ game }) => {
	if (!game) return <Loader />;
	return (
		<div className="lul__gameContainer">
			<div className="lul__gameContainer-image">
				{game.deals ? (
					<img src={game.info.thumb} alt={game.info.title} />
				) : (
					<img
						src={
							game.screenshots
								? game.screenshots[0].image
								: game.thumbnail
						}
						alt={game.title}
						loading="lazy"
					/>
				)}
			</div>
			{!game.deals ? (
				<FreeGameDetails game={game} />
			) : (
				<GameDealDetails game={game} />
			)}
			<span className="lul__decoration1"></span>
			<span className="lul__decoration2"></span>
		</div>
	);
};

export default GameContainer;

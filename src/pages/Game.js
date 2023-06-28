import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameContainer, VideoContainer } from "../containers";
import {
	fetchData,
	freeGamesOptions,
	gameDealsOptions,
} from "../utils/fetchData";

const Game = (game) => {
	const { id } = useParams();
	const [gameDetail, setGameDetail] = useState({});

	useEffect(() => {
		const fetchGameData = async () => {
			const freeGamesUrl =
				"https://free-to-play-games-database.p.rapidapi.com/api";
			const gameDealsUrl =
				"https://cheapshark-game-deals.p.rapidapi.com/games";

			let gameResponse;

			if (!isNaN(id)) {
				gameResponse = await fetchData(
					`${freeGamesUrl}/game?id=${id}`,
					freeGamesOptions
				);
				setGameDetail(gameResponse);
			} else {
				let gameId = id.replace("deal=", "");
				gameResponse = await fetchData(
					`${gameDealsUrl}?id=${gameId}`,
					gameDealsOptions
				);
				setGameDetail(gameResponse);
			}
		};
		fetchGameData();
	}, [id]);

	return (
		<div className="lul__home-container full-width">
			<GameContainer game={gameDetail} />
			<VideoContainer game={gameDetail} />
		</div>
	);
};

export default Game;

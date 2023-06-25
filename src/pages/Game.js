import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	fetchData,
	freeGamesOptions,
	gameDealsOptions,
	youtubeOptions,
} from "../utils/fetchData";

import { GameContainer } from "../containers";

const Game = (game) => {
	const { id } = useParams();
	const [gameDetail, setGameDetail] = useState({});
	const [gameVideo, setGameVideo] = useState({});

	useEffect(() => {
		const fetchGameData = async () => {
			const freeGamesUrl =
				"https://free-to-play-games-database.p.rapidapi.com/api";
			const gameDealsUrl =
				"https://cheapshark-game-deals.p.rapidapi.com/games";
			const gameVideoUrl =
				"https://youtube-search-and-download.p.rapidapi.com";

			let gameResponse;

			if (!isNaN(id)) {
				gameResponse = await fetchData(
					`${freeGamesUrl}/game?id=${id}`,
					freeGamesOptions
				);
				setGameDetail(gameResponse);
				console.log("Free Game: ", gameResponse);
			} else {
				let gameId = id.replace("deal=", "");
				gameResponse = await fetchData(
					`${gameDealsUrl}?id=${gameId}`,
					gameDealsOptions
				);
				setGameDetail(gameResponse);
				console.log("Game Deal: ", gameResponse);
			}

			const videoResponse = await fetchData(
				`${gameVideoUrl}/search?query=${gameResponse.title}`,
				youtubeOptions
			);
			setGameVideo(videoResponse);
			console.log("Video: ", videoResponse);
		};
		fetchGameData();
	}, [id]);

	return (
		<div>
			<GameContainer game={gameDetail} />
		</div>
	);
};

export default Game;

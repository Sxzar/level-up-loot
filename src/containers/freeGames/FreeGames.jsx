import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HorizontalScrollbar } from "../../components";
import { fetchData, freeGamesOptions } from "../../utils/fetchData";
import "./FreeGames.css";

const FreeGames = () => {
	const [freeGames, setFreeGames] = useState([]);
	const numberOfCards = 10;

	useEffect(() => {
		const fetchFreeGamesData = async () => {
			try {
				const response = await fetchData(
					"https://free-to-play-games-database.p.rapidapi.com/api/games",
					freeGamesOptions
				);
				setFreeGames(response.slice(0, numberOfCards));
			} catch (error) {
				console.log("Error fetching data: ", error);
			}
		};
		fetchFreeGamesData();
	}, []);

	return (
		<div className="lul__freeGames">
			<h2>
				<Link to="/freeGames">🎮Free Games </Link>
			</h2>

			<p>
				Look no further, because right here is where you'll discover an
				incredible collection <br /> of free games that will keep you
				entertained for hours on end.
			</p>
			<HorizontalScrollbar data={freeGames} />
		</div>
	);
};

export default FreeGames;

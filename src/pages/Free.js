import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../components/";
import { fetchData, freeGamesOptions } from "../utils/fetchData";

const Free = () => {
	const [freeGames, setFreeGames] = useState([]);

	useEffect(() => {
		const fetchFreeGamesData = async () => {
			try {
				const response = await fetchData(
					"https://free-to-play-games-database.p.rapidapi.com/api/games",
					freeGamesOptions
				);
				setFreeGames(response);
			} catch (error) {
				console.log("Error fetching data: ", error);
			}
		};
		fetchFreeGamesData();
	}, []);
	return (
		<div className="lul__home-container lul__page section__padding full-width">
			<h2>
				<Link to="/freeGames">🎮Free Games </Link>
			</h2>
			<p style={{ padding: "1rem" }}>
				Look no further, because right here is where you'll discover an
				incredible collection <br /> of free games that will keep you
				entertained for hours on end.
			</p>

			<Pagination
				totalItems={freeGames.length}
				itemsPerPage={20}
				data={freeGames}
			/>
		</div>
	);
};

export default Free;

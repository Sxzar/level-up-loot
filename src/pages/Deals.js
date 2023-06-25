import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader, Pagination } from "../components/";
import { fetchData, gameDealsOptions } from "../utils/fetchData";

const Deals = () => {
	const [gameDeals, setGameDeals] = useState([]);

	useEffect(() => {
		const fetchFreeGamesData = async () => {
			try {
				const response = await fetchData(
					"https://cheapshark-game-deals.p.rapidapi.com/deals",
					gameDealsOptions
				);
				setGameDeals(response);
			} catch (error) {
				console.log("Error fetching data: ", error);
			}
		};
		fetchFreeGamesData();
	}, []);

	if (!gameDeals) return <Loader />;
	return (
		<div className="lul__home-container lul__page section__padding">
			<h2>
				<Link to="/freeGames">🤑 Game Deals </Link>
			</h2>
			<p style={{ padding: "1rem" }}>
				Get ready to level up your gaming experience with some exciting
				deals on the <br />
				latest releases.
			</p>
			<Pagination
				totalItems={gameDeals.length}
				itemsPerPage={20}
				data={gameDeals}
			/>
		</div>
	);
};

export default Deals;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HorizontalScrollbar } from "../../components";
import { fetchData, gameDealsOptions } from "../../utils/fetchData";
import "./GameDeals.css";

const GameDeals = () => {
	const [gameDeals, setGameDeals] = React.useState([]);

	useEffect(() => {
		const fetchFreeGamesData = async () => {
			try {
				const response = await fetchData(
					"https://cheapshark-game-deals.p.rapidapi.com/deals?pageSize=10",
					gameDealsOptions
				);
				setGameDeals(response);
			} catch (error) {
				console.log("Error fetching data: ", error);
			}
		};
		fetchFreeGamesData();
	}, []);

	return (
		<div className="lul__gameDeals">
			<h2>
				<Link to="/deals">🤑 Game Deals</Link>
			</h2>

			<p>
				Get ready to level up your gaming experience with some exciting
				deals on the <br />
				latest releases.
			</p>
			<HorizontalScrollbar data={gameDeals} />
		</div>
	);
};

export default GameDeals;

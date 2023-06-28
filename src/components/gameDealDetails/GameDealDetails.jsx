import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";
import { fetchData, gameDealsOptions } from "../../utils/fetchData";
import "./GameDealDetails.css";

const GameDealDetails = ({ game }) => {
	const [stores, setStores] = useState([]);

	useEffect(() => {
		const fetchGameData = async () => {
			const storesData = await fetchData(
				"https://cheapshark-game-deals.p.rapidapi.com/stores",
				gameDealsOptions
			);
			setStores(storesData);
		};
		fetchGameData();
	}, []);
	return (
		<div className="lul__gameDealDetails">
			<h2>{game.info.title}</h2>
			<div className="lul__gameDealDetails-deals">
				{game.deals.map((deal, index) => {
					if (Math.floor(deal.savings) === 0) return null;
					return (
						<div
							key={index}
							className="lul__gameDealDetails-deals__deal"
						>
							{stores.map((store, index) => {
								if (store.storeID === deal.storeID) {
									return (
										<p
											key={index}
											className="lul__gameDealDetails-deals__provider"
										>
											<img
												src={`https://www.cheapshark.com/${store.images.icon}`}
												alt={store.storeName}
											/>
											{store.storeName}
										</p>
									);
								} else return null;
							})}
							<p>-{Math.floor(deal.savings)}%</p>
							<a
								href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
								target="_blank"
								rel="noreferrer noopener"
							>
								Buy Now
							</a>
						</div>
					);
				})}
			</div>
			<div className="lul__gameDealDetails-scrollAnimation">
				<Player
					autoplay
					loop
					src="https://assets8.lottiefiles.com/packages/lf20_P4RBQZ.json"
					style={{ height: "50px", width: "50px" }}
				/>
			</div>
		</div>
	);
};

export default GameDealDetails;

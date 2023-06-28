import React from "react";
import "./FreeGameDetails.css";

const FreeGameDetails = ({ game }) => {
	return (
		<div className="lul__freeGameDetails section__padding">
			<h2>{game.title}</h2>
			<div className="lul__freeGameDetails-top">
				{game.genre ? <p>Genre: {game.genre}</p> : null}
				{game.publisher ? <p>Publisher: {game.publisher}</p> : null}
			</div>
			{game.description ? (
				<p className="lul__freeGameDetails-description">
					{game.description}
				</p>
			) : null}
			{game.minimum_system_requirements ? (
				<div className="lul__freeGameDetails-requirements">
					<h4>System Requirements</h4>
					{game.minimum_system_requirements.os ? (
						<p>OS: {game.minimum_system_requirements.os}</p>
					) : null}
					{game.minimum_system_requirements.graphics ? (
						<p>
							Graphics:{" "}
							{game.minimum_system_requirements.graphics}
						</p>
					) : null}
					{game.minimum_system_requirements.storage ? (
						<p>
							Storage: {game.minimum_system_requirements.storage}
						</p>
					) : null}
					{game.minimum_system_requirements.memory ? (
						<p>Memory: {game.minimum_system_requirements.memory}</p>
					) : null}
					{game.minimum_system_requirements.processor ? (
						<p>
							Processor:{" "}
							{game.minimum_system_requirements.processor}
						</p>
					) : null}
				</div>
			) : null}
			{game.deals ? (
				<div className="lul__freeGameDetails__deals"></div>
			) : null}
		</div>
	);
};

export default FreeGameDetails;

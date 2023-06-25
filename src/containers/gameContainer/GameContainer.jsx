import React from "react";
import "./GameContainer.css";

const GameContainer = ({ game }) => {
	return (
		<div className="lul__gameContainer">
			<div className="lul__gameContainer-image">
				<img
					src={
						game.screenshots
							? game.screenshots[0].image
							: game.thumbnail
					}
					alt={game.title}
				/>
			</div>
			<div className="lul__gameContainer-gameDetails section__padding">
				<h2>{game.title}</h2>
				<div className="lul__gameContainer-gameDetails__top">
					{game.genre ? <p>Genre: {game.genre}</p> : null}
					{game.publisher ? <p>Publisher: {game.publisher}</p> : null}
				</div>
				{game.description ? (
					<p className="lul__gameContainer-gameDetails__description">
						{game.description}
					</p>
				) : null}
				{game.minimum_system_requirements ? (
					<div className="lul__gameContainer-gameDetails__requirements">
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
								Storage:{" "}
								{game.minimum_system_requirements.storage}
							</p>
						) : null}
						{game.minimum_system_requirements.memory ? (
							<p>
								Memory:{" "}
								{game.minimum_system_requirements.memory}
							</p>
						) : null}
						{game.minimum_system_requirements.processor ? (
							<p>
								Processor:{" "}
								{game.minimum_system_requirements.processor}
							</p>
						) : null}
					</div>
				) : null}
			</div>
			<span className="lul__decoration1"></span>
			<span className="lul__decoration2"></span>
		</div>
	);
};

export default GameContainer;

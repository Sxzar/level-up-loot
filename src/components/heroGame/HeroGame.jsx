import React, { useEffect, useState } from "react";
import { Loader } from "../";
import { epicGamesOptions, fetchData } from "../../utils/fetchData";
import "./HeroGame.css";

const HeroGame = () => {
    const [game, setGame] = useState([]);

    useEffect(() => {
        const fetchHeroGamesData = async () => {
            const heroGameData = await fetchData(
                "https://epic-free-games.p.rapidapi.com/epic-free-games-coming-soon",
                epicGamesOptions
            );
            setGame(heroGameData);
        };
        fetchHeroGamesData();
    }, []);

    // Slider for hero games

    // Move to the next slide
    // If it's last slide, go to the first slide
    // Move to the next slide after 5 seconds

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (game.length === 1) {
            setCurrentIndex(0);
            return;
        } else {
            const intervalId = setInterval(() => {
                setCurrentIndex((currentIndex + 1) % game.length);
            }, 2000);

            return () => clearInterval(intervalId);
        }
    }, [game, currentIndex]);

    return (
        <div className="lul__heroGames">
            {game.length ? (
                <div className="lul__heroGames-game">
                    <img
                        src={game[currentIndex].offerImageWide}
                        alt={game[currentIndex].title}
                    />
                    <div className="lul__heroGame-badge">
                        <span>Coming Soon</span>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default HeroGame;

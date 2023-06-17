import React, { useEffect, useState } from "react";
import { CardTag, Loader } from "../";
import { epicGamesOptions, fetchData } from "../../utils/fetchData";
import "./HeroGame.css";

const HeroGame = () => {
    const [game, setGame] = useState([]);
    const [sectionTitle, setSectionTitle] = useState("Coming Soon");

    useEffect(() => {
        const fetchHeroGamesData = async () => {
            const endpoint1 = "https://epic-free-games.p.rapidapi.com/epic-free-games";
            const endpoint2 = "https://epic-free-games.p.rapidapi.com/epic-free-games-coming-soon";

            try {
                const response1 = await fetchData(endpoint1, epicGamesOptions);
                
                if (response1.length > 0) {
                    setGame(response1);
                    setSectionTitle("Get it now");
                } else {
                    const response2 = await fetchData(endpoint2, epicGamesOptions);
                    setGame(response2);
                }
            } catch (error) {
                console.log('Error fetching data: ', error);
            }
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
            }, 5000);

            return () => clearInterval(intervalId);
        }
    }, [game, currentIndex]);

    return (
        <div className="lul__heroGames">
            {game.length ? (
                    <div className="lul__heroGames-game">
                        <a href={game[currentIndex].appUrl} target="_blank" rel="noreferrer noopener">
                            <img
                                src={game[currentIndex].offerImageWide}
                                alt={game[currentIndex].name}
                            />
                            <CardTag title="Free"></CardTag>
                            <div className="lul__heroGame-sectionTitle">
                                <span>{sectionTitle}</span>
                            </div>
                        </a>
                    </div>
               
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default HeroGame;

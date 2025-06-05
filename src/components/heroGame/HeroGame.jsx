import React, { useEffect, useState } from "react";
import { CardTag, Loader } from "../";
import { epicGamesOptions, fetchData } from "../../utils/fetchData";
import "./HeroGame.css";

const HeroGame = () => {
    const [game, setGame] = useState([]);
    const [sectionTitle, setSectionTitle] = useState("Coming Soon");

      useEffect(() => {
      const fetchHeroGamesData = async () => {
          const endpoint = "https://epic-games-store-free-games.p.rapidapi.com/free?country=US";

          try {
              const response = await fetchData(endpoint, epicGamesOptions);

              if (response && response.currentGames && response.currentGames.length > 0) {
                  setGame(response.currentGames);
                  setSectionTitle("Get it now");
              } else if (response && response.upcomingGames && response.upcomingGames.length > 0) {
                  setGame(response.upcomingGames);
                  setSectionTitle("Coming soon");
              } else {
                  setSectionTitle("No free games available");
                  setGame([]);
              }
          } catch (error) {
              console.log("Error fetching data: ", error);
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
                    <a
                        href={`https://store.epicgames.com/en-US/p/${game[currentIndex].productSlug}`}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img
                            src={game[currentIndex].keyImages[0].url}
                            alt={game[currentIndex].title}
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

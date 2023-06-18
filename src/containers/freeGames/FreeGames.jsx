import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import { fetchData, freeGamesOptions } from "../../utils/fetchData";
import "./FreeGames.css";

const FreeGames = () => {
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

    // Set the number of cards to display on the slider
    const numberOfCards = 10;

    const freeGamesCards = freeGames.slice(0, numberOfCards);

    // Set the background color for each card
    const cardColors = ["#F35826", "#877BF5", "#66C8FF", "#FFBE10"];

    return (
        <div className="lul__freeGamesSlider">
            {freeGamesCards.map((game, index) => (
                <Card
                    key={index}
                    data={game}
                    color={cardColors[index % cardColors.length]}
                />
            ))}
        </div>
    );
};

export default FreeGames;

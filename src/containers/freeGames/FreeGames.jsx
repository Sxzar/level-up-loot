import React, { useEffect, useState } from "react";
import { HorizontalScrollbar } from "../../components";
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

    return (
        <div className="lul__scrollMenu">
            <HorizontalScrollbar data={freeGames} />
        </div>
    );
};

export default FreeGames;

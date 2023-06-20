import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../components";
import {
    fetchData,
    freeGamesOptions,
    gameDealsOptions,
} from "../utils/fetchData";

const SearchResults = () => {
    const location = useLocation();
    const search = location.state.search;
    const [games, setGames] = React.useState([]);

    const cardColors = ["#F35826", "#877BF5", "#66C8FF", "#FFBE10"];

    useEffect(() => {
        const fetchSearchedGames = async () => {
            // Set the endpoints
            const endpoint1 =
                "https://free-to-play-games-database.p.rapidapi.com/api/games";
            const endpoint2 = `https://cheapshark-game-deals.p.rapidapi.com/deals?title=${search}`;

            let allResults = [];

            try {
                // Fetch the data from the two endpoints
                const response1 = await fetchData(endpoint1, freeGamesOptions);

                let searchedGames = response1.filter((game) =>
                    game.title.toLowerCase().includes(search)
                );

                const response2 = await fetchData(endpoint2, gameDealsOptions);

                // Combine the two arrays into one
                allResults = [...searchedGames, ...response2];

                // Set the state
                setGames(allResults);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };
        fetchSearchedGames();
    }, [search]);

    return (
        <div className="lul__searchResults">
            {games.map((game, index) => (
                <Card
                    key={index}
                    data={game}
                    color={cardColors[index % cardColors.length]}
                />
            ))}
        </div>
    );
};

export default SearchResults;

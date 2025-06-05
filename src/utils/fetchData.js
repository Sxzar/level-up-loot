export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const gameDealsOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com",
    },
};

export const freeGamesOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
};

export const epicGamesOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "epic-games-store-free-games.p.rapidapi.com",
    },
};

export const bingNewsOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};

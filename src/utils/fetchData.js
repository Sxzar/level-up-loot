export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const gameDealsOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "https://cheapshark-game-deals.p.rapidapi.com/deals",
    },
};

export const freeGamesOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host":
            "https://free-to-play-games-database.p.rapidapi.com/api/filter",
    },
};

export const epicGamesOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host":
            "https://epic-free-games.p.rapidapi.com/epic-free-games",
    },
};

export const bingNewsOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "https://bing-news-search1.p.rapidapi.com/news",
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};

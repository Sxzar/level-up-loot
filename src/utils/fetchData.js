export const fetchData = async (url, options) => {
  const isDev = process.env.NODE_ENV === "development";
  const isEpicGames =
    options?.headers?.["X-RapidAPI-Host"] ===
    "epic-games-store-free-games.p.rapidapi.com";

  if (isDev && isEpicGames) {
    console.log("Mocking Epic Games API in dev mode");
    return {
      currentGames: [
        {
          title: "Tiny Tina's Wonderlands",
          productSlug: "tiny-tinas-wonderlands",
          keyImages: [
            {
              url: "https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/Tinytinawide_2560x1440-ba126bdeac3faab0596b7c56e9c09990"
            }
          ]
        },
        {
          title: "Limbo",
          productSlug: "limbo",
          keyImages: [
            {
              url: "https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/Day7wide_2560x1440-6c93379907b03def09fcd60c6677a5d9"
            }
          ]
        }
      ]
    };
  }

  // Real fetch for everything else
   const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

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

export const epicNewsOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "epic-games-store.p.rapidapi.com",
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
};



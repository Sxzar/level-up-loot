import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../components";
import { epicNewsOptions, fetchData } from "../utils/fetchData";

const GamingNews = () => {
	const [epicNews, setEpicNews] = useState([]);
	useEffect(() => {
  const fetchNewsData = async () => {
    try {
      const response = await fetchData(
        "https://epic-games-store.p.rapidapi.com/getNews/locale/en/limit/30",
        epicNewsOptions
      );
      console.log("News response:", response);
      setEpicNews(Array.isArray(response) ? response : []);
    } catch (error) {
      console.log("Error fetching news: ", error);
    }
  };
  fetchNewsData();
}, []);
	return (
		<div className="lul__home-container lul__page section__padding full-width">
			<h2>
				<Link to="/gaming-news">📰News </Link>
			</h2>
			<p style={{ padding: "1rem" }}>
				All the latest gaming news from around the world. Everything you
				could ever want to <br />
				watch or read about gaming all in one place.
			</p>
			{Array.isArray(epicNews) && epicNews.length > 0 ? (
  <Pagination
    totalItems={epicNews.length}
    itemsPerPage={20}
    data={epicNews}
  />
) : (
  <p style={{ padding: "1rem" }}>No news available.</p>
)}
		</div>
	);
};

export default GamingNews;

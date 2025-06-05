import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NewsSlider } from "../../components";
import { epicNewsOptions, fetchData } from "../../utils/fetchData";
import "./News.css";

const News = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
	const fetchNewsData = async () => {
		try {
			const response = await fetchData(
				"https://epic-games-store.p.rapidapi.com/getNews/locale/en/limit/30",
				epicNewsOptions
			);

			console.log("News API response:", response); // <- Add this

			// adjust this line based on actual data shape
			setNews(Array.isArray(response) ? response : []);
		} catch (error) {
			console.log("Error fetching data: ", error);
		}
	};
	fetchNewsData();
}, []);

	return (
		<div className="lul__homeNews">
			<h2>
				<Link to="/news">📰News</Link>
			</h2>

			<p>
				All the latest gaming news from around the world. Everything you
				could ever want to <br /> watch or read about gaming all in one
				place.
			</p>
			<NewsSlider news={news} />
		</div>
	);
};

export default News;

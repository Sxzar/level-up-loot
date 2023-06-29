import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../components";
import { bingNewsOptions, fetchData } from "../utils/fetchData";

const GamingNews = () => {
	const [bingNews, setBingNews] = useState([]);
	const cardColors = ["#F35826", "#877BF5", "#66C8FF", "#FFBE10"];
	useEffect(() => {
		const fetchNewsData = async () => {
			try {
				const response = await fetchData(
					"https://bing-news-search1.p.rapidapi.com/news/search?q=gaming&freshness=month&cc=US&count=100",
					bingNewsOptions
				);
				setBingNews(response.value);
			} catch (error) {
				console.log("Error fetching data: ", error);
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
			All the latest gaming news from around the world. Everything you could ever want to <br />
watch or read about gaming all in one place.
			</p>
			<Pagination totalItems={bingNews.length} itemsPerPage={20} data={bingNews} />
		</div>
	);
};

export default GamingNews;

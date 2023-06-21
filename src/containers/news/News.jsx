import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NewsSlider } from "../../components";
import { bingNewsOptions, fetchData } from "../../utils/fetchData";
import "./News.css";

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetchData(
                    "https://bing-news-search1.p.rapidapi.com/news/search?q=gaming&freshness=month&cc=US",
                    bingNewsOptions
                );
                setNews(response.value);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };
        fetchNewsData();
    }, []);

    return (
        <div className="lul__homeNews">
            <Link to="/news">
                <h2>📰News</h2>
            </Link>
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

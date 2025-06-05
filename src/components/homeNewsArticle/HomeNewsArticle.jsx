import React from "react";
import { GlassButton, Loader } from "../";
import Placeholder from "../../assets/img/placeholder.jpg";
import "./HomeNewsArticle.css";

const HomeNewsArticle = ({ article, color }) => {
	if (!article) return <Loader />;

	// Image logic
	const imageUrl = article.trendingImage || Placeholder;

	// Title
	const title = article._title || article.title || "Untitled";

	// Description
	const description = article.short || "Click to read more...";

	// Link to full article
	const articleUrl = `https://store.epicgames.com/en-US${article.url || article.urlPattern || ""}`;

	return (
		<div className="lul__homeNewsArticle">
			<div className="lul__homeNewsArticle-image">
				<a href={articleUrl} target="_blank" rel="noreferrer noopener">
					<img src={imageUrl} alt={title} />
				</a>
			</div>
			<div
				className="lul__homeNewsArticle-content"
				style={{ backgroundColor: color }}
			>
				<a href={articleUrl} target="_blank" rel="noreferrer noopener">
					{article.author && (
						<span className="lul__homeNewsArticle-provider">
							{article.author}
						</span>
					)}
					<h3>{title}</h3>
					<p className="lul__homeNewsArticle-description">
						{description}
					</p>
				</a>
				<GlassButton content="Read More" action={articleUrl} />
			</div>
		</div>
	);
};

export default HomeNewsArticle;

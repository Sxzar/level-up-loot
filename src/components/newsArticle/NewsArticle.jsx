import React from "react";
import { GlassButton, Loader } from "../";
import Placeholder from "../../assets/img/placeholder.jpg";
import "./NewsArticle.css";

const NewsArticle = ({ article, color }) => {
	if (!article) return <Loader />;

	// Use trending image or fallback
	const imageUrl = article.trendingImage || Placeholder;

	// Build article link
	const articleUrl = `https://store.epicgames.com/en-US${article.url || article.urlPattern || ""}`;

	// Fallbacks for title & author
	const title = article._title || article.title || "Untitled";
	const author = article.author || "Epic Games News";

	return (
		<div className="lul__newsArticle" style={{ backgroundColor: color }}>
			<div className="lul__newsArticle-image">
				<a href={articleUrl} target="_blank" rel="noreferrer noopener">
					<img src={imageUrl} alt={title} />
				</a>
			</div>
			<div className="lul__newsArticle-content">
				<a href={articleUrl} target="_blank" rel="noreferrer noopener">
					<span className="lul__newsArticle-provider">{author}</span>
					<h3>{title}</h3>
				</a>
			</div>
			<GlassButton
				content="Read More"
				action={articleUrl}
				external={1}
			/>
		</div>
	);
};

export default NewsArticle;

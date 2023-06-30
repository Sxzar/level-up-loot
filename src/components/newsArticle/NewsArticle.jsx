import React from "react";
import { GlassButton, Loader } from "../";
import Placeholder from "../../assets/img/placeholder.jpg";
import "./NewsArticle.css";

const NewsArticle = ({ article, color }) => {
	if (!Placeholder) return <Loader />;

	let newImage;
	if (article.image) {
		let image = new URL(article.image.thumbnail.contentUrl);
		let params = new URLSearchParams(image.search);
		params.delete("pid");
		newImage = image.origin + image.pathname + "?" + params.toString();
	} else {
		newImage = Placeholder;
	}
	return (
		<div className="lul__newsArticle" style={{ backgroundColor: color }}>
			<div className="lul__newsArticle-image">
				<a href={article.url} target="_blank" rel="noreferrer noopener">
					<img src={newImage} alt={article.name} />
				</a>
			</div>
			<div className="lul__newsArticle-content">
				<a href={article.url} target="_blank" rel="noreferrer noopener">
					<span className="lul__newsArticle-provider">
						{article.provider[0].name}
					</span>
					<h3>{article.name}</h3>
				</a>
			</div>
			<GlassButton
				content="Read More"
				action={article.url}
				external={1}
			/>
		</div>
	);
};

export default NewsArticle;

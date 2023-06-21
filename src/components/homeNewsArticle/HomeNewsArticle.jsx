import React from "react";
import { GlassButton } from "../";
import "./HomeNewsArticle.css";

const HomeNewsArticle = ({ article, color }) => {
    let image = new URL(article.image.thumbnail.contentUrl);
    let params = new URLSearchParams(image.search);
    params.delete("pid");
    const newImage = image.origin + image.pathname + "?" + params.toString();
    return (
        <div className="lul__homeNewsArticle">
            <div className="lul__homeNewsArticle-image">
                <a href={article.url} target="_blank" rel="noreferrer noopener">
                    <img src={newImage} alt={article.name} />
                </a>
            </div>
            <div
                className="lul__homeNewsArticle-content"
                style={{ backgroundColor: color }}
            >
                <a href={article.url} target="_blank" rel="noreferrer noopener">
                    <span className="lul__homeNewsArticle-provider">
                        {article.provider[0].name}
                    </span>
                    <h3>{article.name}</h3>
                    <p className="lul__homeNewsArticle-description">
                        {article.description}
                    </p>
                </a>
                <GlassButton content="Read More" />
            </div>
        </div>
    );
};

export default HomeNewsArticle;
import React from "react";
import Slider from "react-slick";
import { HomeNewsArticle } from "../";
import "./NewsSlider.css";

const NewsSlider = ({ news }) => {
	const cardColors = ["#F35826", "#877BF5", "#66C8FF", "#FFBE10"];
	let settings = {
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		lazyLoad: false,
		draggable: true,
		autoplay: true,
	};
	return (
		<div className="lul__newsSlider">
			<Slider {...settings}>
				{news.map((article, index) => (
					<HomeNewsArticle
						key={index}
						article={article}
						color={cardColors[index % cardColors.length]}
					/>
				))}
			</Slider>
		</div>
	);
};

export default NewsSlider;

import React from "react";
import Slider from "react-slick";
import { Card } from "../";
import "./HorizontalScrollbar.css";

// import LeftArrowIcon from "../../assets/img/left-arrow.svg";
// import RightArrowIcon from "../../assets/img/right-arrow.svg";

const HorizontalScrollbar = ({ data }) => {
    const numberOfCards = 10;
    const freeGamesCards = data.slice(0, numberOfCards);

    // Set the background color for each card
    const cardColors = ["#F35826", "#877BF5", "#66C8FF", "#FFBE10"];

    // Horizontal scrollbar settings
    var settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        lazyLoad: true,
        draggable: false,
    };
    return (
        <Slider {...settings}>
            {freeGamesCards.map((game, index) => (
                <div key={index}>
                    <Card
                        key={index}
                        data={game}
                        color={cardColors[index % cardColors.length]}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default HorizontalScrollbar;

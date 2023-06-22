import React from "react";
import Slider from "react-slick";
import { Card } from "../";
import "./HorizontalScrollbar.css";

// import LeftArrowIcon from "../../assets/img/left-arrow.svg";
// import RightArrowIcon from "../../assets/img/right-arrow.svg";

const HorizontalScrollbar = ({ data }) => {
    // Set the background color for each card
    const cardColors = ["#F35826", "#877BF5", "#66C8FF", "#FFBE10"];

    // Horizontal scrollbar settings
    let settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        lazyLoad: false,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2.5,
                }
            }, 
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {  
                breakpoint: 800,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.5,
                }
            }, 
            {
                breakpoint: 715,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.25,
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className="lul__horizontalScrollbar">
            <Slider {...settings}>
                {data.map((game, index) => (
                    <div key={index}>
                        <Card
                            key={index}
                            data={game}
                            color={cardColors[index % cardColors.length]}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HorizontalScrollbar;

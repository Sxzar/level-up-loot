import React from "react";
import { Link } from "react-router-dom";
import { GlassButton, Loader } from "../";
import "./Card.css";

const Card = (props) => {
    const game = props.data;
    if (!game) return <Loader />;
    return (
        <div className="lul__card" style={{ backgroundColor: props.color }}>
            <div className="lul__card-wrapper">
                <Link
                    to={`/game/${game.id}`}
                    className="lul__card-info__button"
                >
                    <div className="lul__card-image">
                        <img
                            src={game.thumbnail ? game.thumbnail : game.thumb}
                            alt={game.title}
                            loading="lazy"
                        />
                    </div>
                </Link>
                <div className="lul__card-info">
                    <h3 className="lul__card-info__title">{game.title}</h3>
                    <GlassButton content="Play Now" />
                </div>
            </div>
        </div>
    );
};

export default Card;

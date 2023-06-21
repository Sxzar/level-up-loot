import React from "react";
import { Link } from "react-router-dom";
import { CardTag, GlassButton, Loader } from "../";
import "./Card.css";

const Card = ({ data, color }) => {
    const game = data;
    if (!game) return <Loader />;

    const fullPrice = parseInt(game.normalPrice);
    const salePrice = parseInt(game.salePrice);
    const discountPercentage = Math.ceil(
        ((fullPrice - salePrice) / fullPrice) * 100
    );

    return (
        <div className="lul__card" style={{ backgroundColor: color }}>
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
                    {game.dealID ? (
                        discountPercentage > 0 ? (
                            <CardTag title={`-${discountPercentage}%`} />
                        ) : null
                    ) : null}
                </Link>
                <div className="lul__card-info">
                    <h3 className="lul__card-info__title">{game.title}</h3>
                    <GlassButton
                        content={
                            game.dealID
                                ? parseInt(game.salePrice) !== 0
                                    ? `$${game.salePrice}`
                                    : "Free"
                                : "Play Now"
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;

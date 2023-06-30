import React, { useState } from "react";
import { Card, NewsArticle } from "../";
import "./Pagination.css";

const Pagination = ({ totalItems, itemsPerPage, data }) => {
	// Set the colors for the cards
	const cardColors = ["#F35826", "#877BF5", "#66C8FF", "#FFBE10"];
	const locationPage = window.location.pathname;

	// Set the current page
	const [currentPage, setCurrentPage] = useState(1);

	// How many pages to show in the pagination
	const pageNumberLimit = 5;
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	// Set the pages
	const pages = [];
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pages.push(i);
	}

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	const container = document.querySelector(".lul__home-container");

	const handlePagination = (e) => {
		setCurrentPage(Number(e.target.id));
		container.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleNextBtn = () => {
		setCurrentPage(currentPage + 1);
		container.scrollTo({ top: 0, behavior: "smooth" });

		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	};
	const handlePrevBtn = () => {
		setCurrentPage(currentPage - 1);
		container.scrollTo({ top: 0, behavior: "smooth" });

		if ((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	};

	let pageIncrementBtn = null;
	if (pages.length > maxPageNumberLimit) {
		pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>;
	}

	const renderPageNumbers = pages.map((number) => {
		if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
			return (
				<li
					key={number}
					id={number}
					onClick={handlePagination}
					className={currentPage === number ? "active" : null}
				>
					{" "}
					{number}{" "}
				</li>
			);
		} else {
			return null;
		}
	});
	return (
		<div className="lul__paginationConatiner">
			<div className="lul__paginationContainer-items">
				{locationPage === "/gaming-news"
					? currentItems.map((news, index) => (
							<NewsArticle
								key={index}
								article={news}
								color={cardColors[index % cardColors.length]}
							/>
					  ))
					: currentItems.map((game, index) => (
							<Card
								key={index}
								data={game}
								color={cardColors[index % cardColors.length]}
							/>
					  ))}
			</div>
			<ul className="lul__paginationContainer-navigation">
				<li className="lul__paginationContainer-navigation--prev">
					<button
						onClick={handlePrevBtn}
						disabled={currentPage === pages[0] ? true : false}
					></button>
				</li>
				{renderPageNumbers}
				{pageIncrementBtn}
				<li className="lul__paginationContainer-navigation--next">
					<button
						onClick={handleNextBtn}
						disabled={
							currentPage === pages[pages.length - 1]
								? true
								: false
						}
					></button>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;

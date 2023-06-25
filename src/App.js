import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SideNav, TopNav } from "./containers";
import { Deals, Free, Game, GamingNews, Home, SearchResults } from "./pages";

const App = () => {
	return (
		<div className="app">
			<TopNav />
			<div className="app__body">
				<SideNav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search-results" element={<SearchResults />} />
					<Route path="/game/:id" element={<Game />} />
					<Route path="/free-games" element={<Free />} />
					<Route path="/game-deals" element={<Deals />} />
					<Route path="/gaming-news" element={<GamingNews />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;

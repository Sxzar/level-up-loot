import React from "react";
import { Cta } from "../../components";
import "./Subscribe.css";

const Subscribe = () => {
	return (
		<div className="lul__subscribeSection">
			<span className="lul__subscribeSection-decoration__2"></span>
			<span className="lul__subscribeSection-decoration__1"></span>
			<span className="lul__subscribeSection-decoration__3"></span>
			<span className="lul__subscribeSection-decoration__4"></span>
			<div className="lul__subscribeSection-content">
				<h2>
					⭐ Imagine being the first to know about
					<br />
					upcoming releases
				</h2>
				<p>
					By subscribing to our platform, you'll gain access to a
					treasure trove of <br /> information, updates, and
					announcements that will keep you ahead of the curve.
				</p>
				<Cta />
			</div>
		</div>
	);
};

export default Subscribe;

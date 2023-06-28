import React, { useEffect, useState } from "react";
import { Loader } from "../../components";
import { fetchData, youtubeOptions } from "../../utils/fetchData";
import "./VideoContainer.css";

const VideoContainer = ({ game }) => {
	const [gameVideos, setGameVideos] = useState([]);
	useEffect(() => {
		const fetchGameVideos = async () => {
			const gameVideoUrl =
				"https://youtube-search-and-download.p.rapidapi.com";
			let query;

			if (game && game.title) {
				query = game.title;
			} else if (game && game.info && game.info.title) {
				query = game.info.title;
			} else {
				console.log("Pending data...");
				return;
			}

			const videoResponse = await fetchData(
				`${gameVideoUrl}/search?query=${query}`,
				youtubeOptions
			);
			setGameVideos(videoResponse.contents);
		};

		fetchGameVideos();
	}, [game]);

	const numberOfVideos = 4;
	const videoList = gameVideos.slice(0, numberOfVideos);

	return (
		<div className="lul__videoContainer">
			{videoList.length > 0 ? (
				videoList.map((video, index) => {
					if (video.video && video.video.videoId) {
						return (
							<div
								className="lul__videoContainer-video"
								key={index}
							>
								<div className="lul__videoContainer-video__thumb">
									<a
										href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
										target="_blank"
										rel="noreferrer noopener"
									>
										<img
											src={
												video.video.thumbnails[1]
													? video.video.thumbnails[1]
															.url
													: video.video.thumbnails[0]
															.url
											}
											alt={video.video.description}
										/>
										<div className="play-button">
											<p></p>
										</div>
										<span>{video.video.lengthText}</span>
									</a>
								</div>
								<div className="lul__videoContainer-video__description">
									<h4>
										<a
											href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
											target="_blank"
											rel="noreferrer noopener"
										>
											{video.video.title}
										</a>
									</h4>
									<p>
										<a
											href={`https://www.youtube.com/channel/${video.video.channelId}`}
											target="_blank"
											rel="noreferrer noopener"
										>
											{video.video.channelName}
										</a>
									</p>
									<p>
										{video.video.viewCountText} -{" "}
										{video.video.publishedTimeText}
									</p>
								</div>
							</div>
						);
					}
				})
			) : (
				<Loader />
			)}
		</div>
	);
};

export default VideoContainer;

import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import StreamersSlider from "../../../components/StreamersSlider/StreamersSlider";
import LivestreamCard from "../../../components/UIComponents/LivestreamCard";
import StreamerCard from "../../../components/UIComponents/StreamerCard";
import RedditCard from "../../../components/UIComponents/RedditCard";
import homeStyles from "./home.module.scss";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";

const Home: FunctionComponent = () => {
	let [games, setGames] = useState(() => []);

	let [liveStreams, setliveStreams] = useState(() => []);

	let [redditPosts, setRedditPosts] = useState(() => []);

	const getRedditPosts = async () => {
		await axios
			.get("http://localhost:3000/api/rawgapi/getredditposts")
			.then((gamesResponse) =>
				setRedditPosts(() => gamesResponse.data["redditPosts"])
			)
			.catch((error) => {
				setRedditPosts(() => []);
				console.error(error);
			});
	};

	const getGameStreamers = async () => {
		await axios
			.get("http://localhost:3000/api/twitchapi/gettopchannels")
			.then((gamesResponse) => {
				setGames(() => gamesResponse.data["channels"]);
			})
			.catch((error) => {
				setGames(() => []);
				console.error(error);
			});
	};

	const getLiveStreams = async () => {
		await axios
			.get("http://localhost:3000/api/twitchapi/getlivestreams")
			.then((streamsResponse) => {
				setliveStreams(() => streamsResponse.data["livestreams"]);
			})
			.catch((error) => {
				setliveStreams(() => []);
				console.error(error);
			});
	};

	useEffect(() => {
		getRedditPosts();
		getGameStreamers();
		getLiveStreams();
	}, []);

	return (
		<div className={homeStyles.home}>
			<Navbar activePath="home" />
			{games.length > 0 || liveStreams.length > 0 || redditPosts.length > 0 ? (
				<main>
					<div className={homeStyles.streamers}>
						<StreamersSlider
							sliderTitle={""}
							sliderContent={games}
							sliderComponent={(sliderData) => (
								<StreamerCard cardData={sliderData} />
							)}
						/>
					</div>
					<div className={homeStyles.liveStreams}>
						<StreamersSlider
							sliderContent={liveStreams}
							sliderComponent={(sliderData: object) => (
								<LivestreamCard cardData={sliderData} />
							)}
							sliderTitle="Twitch livestreams"
						/>
					</div>
					<div className={homeStyles.redditPosts}>
						<p className={`${homeStyles.title} ph`}>
							Posts from game subreddits
						</p>
						<div className={homeStyles.postsContainer}>
							{redditPosts.map((redditPost) => (
								<RedditCard postData={redditPost} />
							))}
						</div>
					</div>
				</main>
			) : (
				<LoadingScreen />
			)}
		</div>
	);
};

export default Home;

import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import StreamersSlider from "../../../components/StreamersSlider/StreamersSlider";
import LivestreamCard from "../../../components/UIComponents/LivestreamCard";
import StreamerCard from "../../../components/UIComponents/StreamerCard";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
import homeStyles from "./home.module.scss";

const Home: FunctionComponent = () => {
	let [games, setGames] = useState(() => []);

	let [liveStreams, setliveStreams] = useState(() => []);

	let [articles, setArticles] = useState(() => []);

	interface HeadlinesRequestBody {
		requestType: string;
		articlesNumber: number;
	}

	const getGameStreamers = async () => {
		await axios
			.get("http://localhost:3000/api/twitchapi/gettopchannels")
			.then((gamesResponse) => {
				setGames(() => gamesResponse.data["channels"]);
			})
			.catch((error) => console.log(error));
	};

	const getLiveStreams = async () => {
		await axios
			.get("http://localhost:3000/api/twitchapi/getlivestreams")
			.then((streamsResponse) => {
				setliveStreams(() => streamsResponse.data["livestreams"]);
			})
			.catch((error) => console.log(error));
	};

	const getHeadlines = (): void => {
		let requestBody: HeadlinesRequestBody = {
			requestType: "headlines",
			articlesNumber: 20,
		};
		axios
			.post("http://localhost:3000/api/guardianapi/", requestBody)
			.then((rawArticles) => rawArticles.data["articles"]["results"])
			.then((newsArticles) => setArticles(() => newsArticles))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getGameStreamers();
		getLiveStreams();
		// getHeadlines();
	}, []);

	return (
		<div className={homeStyles.home}>
			<Navbar activePath="home" />
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
				{/* <div className={homeStyles.news}>
					<NewsGrid
						gridData={articles}
						gridTitle="News from the gaming world"
						moreLink="link"
					/>
				</div> */}
			</main>
		</div>
	);
};

export default Home;

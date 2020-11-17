import { FunctionComponent } from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import UserContext from "../../../Store.js/UserContext";
import StreamersSlider from "../../../components/StreamersSlider/StreamersSlider";
import LivestreamCard from "../../../components/UIComponents/LivestreamCard";
import StreamerCard from "../../../components/UIComponents/StreamerCard";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
import homeStyles from "./home.module.scss";

const Home: FunctionComponent = () => {
	let [user, setUser] = useContext(UserContext);

	let [games, setGames] = useState(() => []);

	let [liveStreams, setliveStreams] = useState(() => []);

	let [articles, setArticles] = useState(() => []);

	interface TwitchRequestBody {
		requestType: string;
		accessToken: string;
	}

	interface HeadlinesRequestBody {
		requestType: string;
		articlesNumber: number;
	}

	interface ChannelInfo {
		channelName: string;
		channelUrl: string;
		channelLogo: string;
	}

	interface StreamsInfo {
		channel: string;
		followers: string;
		logoUrl: string;
		channelUrl: string;
	}

	const destructureChannel = (rawInfo: object): ChannelInfo => {
		return {
			channelName: rawInfo["_data"]["channel"]["display_name"],
			channelUrl: rawInfo["_data"]["channel"]["url"],
			channelLogo: rawInfo["_data"]["preview"]["large"],
		};
	};

	const destructureGame = (rawInfo: object): StreamsInfo => {
		return {
			channel: rawInfo[0]["channel"]["display_name"],
			followers: rawInfo[0]["channel"]["followers"],
			logoUrl: rawInfo[0]["channel"]["logo"],
			channelUrl: rawInfo[0]["channel"]["url"],
		};
	};

	const getLiveStreams = (): void => {
		let requestBody: TwitchRequestBody = {
			requestType: "liveStreams",
			accessToken: user["userAccessToken"],
		};
		axios
			.post("https://nextplay.vercel.app/api/twitchapi/", requestBody)
			.then((liveStreamsRes) => liveStreamsRes.data["liveStreams"])
			.then((liveStreamsList) => {
				let livestreamsArray: object[] = [];
				liveStreamsList.forEach((liveStream: object) => {
					let liveStreamData: ChannelInfo = destructureChannel(liveStream);
					livestreamsArray.push(liveStreamData);
				});
				setliveStreams(() => livestreamsArray);
			})
			.catch((error) => console.log(error));
	};

	const getGameStreams = (): void => {
		let requestBody: TwitchRequestBody = {
			requestType: "gameStreams",
			accessToken: user["userAccessToken"],
		};
		axios
			.post("https://nextplay.vercel.app/api/twitchapi/", requestBody)
			.then((gamesResponse) => gamesResponse.data["streamersList"])
			.then((gamesActual) => {
				let gamesList: object[] = [];
				gamesActual.forEach((gameActual: object) => {
					let gameData: StreamsInfo = destructureGame(gameActual);
					gamesList.push(gameData);
				});
				setGames(() => gamesList);
			})
			.catch((error) => console.log(error));
	};

	const getHeadlines = (): void => {
		let requestBody: HeadlinesRequestBody = {
			requestType: "headlines",
			articlesNumber: 20,
		};
		axios
			.post("https://nextplay.vercel.app/api/guardianapi/", requestBody)
			.then((rawArticles) => rawArticles.data["articles"]["results"])
			.then((newsArticles) => setArticles(() => newsArticles))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getGameStreams();
		getLiveStreams();
		getHeadlines();
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
						sliderComponent={(sliderData) => (
							<LivestreamCard cardData={sliderData} />
						)}
						sliderTitle="Twitch livestreams"
					/>
				</div>
				<div className={homeStyles.news}>
					<NewsGrid
						gridData={articles}
						gridTitle="News from the gaming world"
						moreLink="link"
					/>
				</div>
			</main>
		</div>
	);
};

export default Home;

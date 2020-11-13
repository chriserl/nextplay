import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../../Store.js/UserContext";
import StreamersSlider from "../../../components/StreamersSlider/StreamersSlider";
import LivestreamCard from "../../../components/UIComponents/LivestreamCard";
import StreamerCard from "../../../components/UIComponents/StreamerCard";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
import homeStyles from "./home.module.scss";

const Home = () => {
	let [user, setUser] = useContext(UserContext);

	let [games, setGames] = useState(() => []);

	let [liveStreams, setliveStreams] = useState(() => []);

	const getLiveStreams = () => {
		axios
			.post("http://localhost:3000/api/twitchapi/", {
				requestType: "liveStreams",
				accessToken: user["userAccessToken"],
			})
			.then((liveStreamsRes) => liveStreamsRes.data["liveStreams"])
			.then((liveStreamsList) => {
				let livestreamsArray = [];
				liveStreamsList.forEach((liveStream) => {
					let liveStreamData = {
						channel: liveStream["_data"]["channel"]["display_name"],
						logoUrl: liveStream["_data"]["channel"]["logo"],
					};
					livestreamsArray.push(liveStreamData);
				});
				setliveStreams(() => livestreamsArray);
			})
			.catch((error) => console.log(error));
	};

	const getGameStreams = () => {
		axios
			.post("http://localhost:3000/api/twitchapi/", {
				requestType: "gameStreams",
				accessToken: user["userAccessToken"],
			})
			.then((mandem) => mandem.data["gamesList"])
			.then((gamesActual) => {
				let gamesList = [];
				gamesActual.forEach((gameActual) => {
					let gameData = {
						channel: gameActual[0]["channel"]["display_name"],
						followers: gameActual[0]["channel"]["followers"],
						logoUrl: gameActual[0]["channel"]["logo"],
					};
					gamesList.push(gameData);
				});
				console.log(gamesList);
				setGames(() => gamesList);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getGameStreams();
		getLiveStreams();
	}, []);

	return (
		<div className={homeStyles.home}>
			<Navbar activePath="home" />
			<main>
				<div className={homeStyles.streamers}>
					<StreamersSlider
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
					<NewsGrid gridTitle="News from the gaming world" moreLink="link" />
				</div>
			</main>
		</div>
	);
};

export default Home;

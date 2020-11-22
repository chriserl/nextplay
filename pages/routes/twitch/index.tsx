import { FunctionComponent, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import TwitchGame from "../../../components/UIComponents/TwitchGame";
import StreamerSlider from "../../../components/StreamersSlider/StreamersSlider";
import VideosGrid from "../../../components/VideoGrid/VideosGrid";
import twitchStyles from "./twitch.module.scss";

const Twitch: FunctionComponent = () => {
	let sliderdata = [1, 2, 3, 4];

	let [games, setGames] = useState(() => []);

	const getGames = async () => {
		let games = await axios
			.get("/api/twitchapi/getgames")
			.then((rawGames) => {
				console.log(rawGames.data["games"]);
				setGames(() => rawGames.data["games"]);
			})
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		getGames();
	}, []);

	return (
		<div className={twitchStyles.twitch}>
			<Navbar activePath="twitch" />

			<main>
				<div className={twitchStyles.gamesSlider}>
					<StreamerSlider
						sliderContent={games.length > 0 && games}
						sliderComponent={(gameData) => <TwitchGame gameData={gameData} />}
						sliderTitle="Top games on twitch"
					/>
				</div>

				<div className={twitchStyles.videosSlider}>
					<VideosGrid
						gridData={sliderdata}
						gridTitle="Twitch streams on GTA V"
					/>
				</div>
			</main>
		</div>
	);
};

export default Twitch;

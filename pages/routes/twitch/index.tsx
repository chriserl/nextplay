import { FunctionComponent, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import TwitchGame from "../../../components/UIComponents/TwitchGame";
import StreamerSlider from "../../../components/StreamersSlider/StreamersSlider";
import VideosGrid from "../../../components/VideoGrid/VideosGrid";
import twitchStyles from "./twitch.module.scss";

const Twitch: FunctionComponent = () => {
	let [games, setGames] = useState(() => []);
	let [livestreams, setLivestreams] = useState(() => []);

	const getGames = async () => {
		await axios
			.get("/api/twitchapi/getgames")
			.then((rawGames) => {
				setGames(() => rawGames.data["games"]);
			})
			.catch((error) => console.error(error));
	};

	let getStreams = async () => {
		await axios
			.get("/api/twitchapi/getgamelivestreams")
			.then((rawStreams) => {
				console.log("found");
				setLivestreams(rawStreams.data["livestreams"]);
			})
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		getGames();
		getStreams();
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
					{livestreams.map((livestream) => (
						<VideosGrid
							gridData={livestream}
							gridTitle={`Streams for ${livestream[0]["game"]}`}
						/>
					))}
				</div>
			</main>
		</div>
	);
};

export default Twitch;

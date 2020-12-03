import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import TwitchGame from "../../../components/UIComponents/TwitchGame";
import StreamerSlider from "../../../components/StreamersSlider/StreamersSlider";
import VideosGrid from "../../../components/VideoGrid/VideosGrid";
import twitchStyles from "./twitch.module.scss";

function Twitch({ gamesList, livestreamsList }) {
	let [games, setGames] = useState(() => []);

	let [livestreams, setLivestreams] = useState(() => []);

	useEffect(() => {
		gamesList && setGames(() => gamesList);
		livestreamsList && setLivestreams(() => livestreamsList);
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
}

export default Twitch;

export async function getServerSideProps(context) {
	let gamesList = await axios
		.get("http://localhost:3000/api/twitchapi/getgames")
		.then((rawGames) => rawGames.data["games"])
		.catch((error) => "server error");

	let livestreamsList = await axios
		.get("http://localhost:3000/api/twitchapi/getgamelivestreams")
		.then((rawStreams) => rawStreams.data["livestreams"])
		.catch((error) => "server error");

	return {
		props: { gamesList, livestreamsList },
	};
}

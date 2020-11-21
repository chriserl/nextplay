import { FunctionComponent } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import TwitchGame from "../../../components/UIComponents/TwitchGame";
import StreamerSlider from "../../../components/StreamersSlider/StreamersSlider";
import VideoCard from "../../../components/UIComponents/VideoCard";
import twitchStyles from "./twitch.module.scss";

const Twitch: FunctionComponent = () => {
	let sliderdata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	return (
		<div className={twitchStyles.twitch}>
			<Navbar activePath="twitch" />

			<main>
				<div className={twitchStyles.gamesSlider}>
					<StreamerSlider
						sliderContent={sliderdata}
						sliderComponent={TwitchGame}
						sliderTitle="Top games on twitch"
					/>
				</div>

				<VideoCard />
			</main>
		</div>
	);
};

export default Twitch;

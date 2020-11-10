import Navbar from "../../../components/Navbar/Navbar";
import StreamersSlider from "../../../components/StreamersSlider/StreamersSlider";
import LivestreamCard from "../../../components/UIComponents/LivestreamCard";
import NewsCard from "../../../components/UIComponents/NewsCard";
import StreamerCard from "../../../components/UIComponents/StreamerCard";
import homeStyles from "./home.module.scss";

const Home = () => {
	let streamers = [
		"ninja",
		"davelee",
		"noisybutters",
		"jake",
		"yin",
		"tom",
		"oscar",
	];
	return (
		<div className={homeStyles.home}>
			<Navbar />
			<main>
				<div className={homeStyles.streamers}>
					<StreamersSlider>
						<StreamerCard />
					</StreamersSlider>
				</div>
				<div className={homeStyles.liveStreams}>
					<StreamersSlider sliderTitle="livestreams">
						<LivestreamCard />
					</StreamersSlider>
				</div>

				<div className={homeStyles.news}>
					<p className={`${homeStyles.gridTitle} ph`}>News</p>
					<div className={homeStyles.gridContainer}>
						{streamers.map((streamer) => (
							<NewsCard />
						))}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;

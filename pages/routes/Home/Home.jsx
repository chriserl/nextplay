import Navbar from "../../../components/Navbar/Navbar";
import StreamersSlider from "../../../components/StreamersSlider/StreamersSlider";
import LivestreamCard from "../../../components/UIComponents/LivestreamCard";
import StreamerCard from "../../../components/UIComponents/StreamerCard";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
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
			<Navbar activePath="home" />
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
					<NewsGrid gridTitle="News from the gaming world" moreLink="link" />
				</div>
			</main>
		</div>
	);
};

export default Home;

import Navbar from "../../../components/Navbar/Navbar";
import StreamersSlider from "../../../components/StreamersSlider/StreamersSlider";
import LivestreamCard from "../../../components/UIComponents/LivestreamCard";
import StreamerCard from "../../../components/UIComponents/StreamerCard";
import homeStyles from "./home.module.scss";

const Home = () => {
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
			</main>
		</div>
	);
};

export default Home;

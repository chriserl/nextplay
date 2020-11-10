import Navbar from "../../../components/Navbar/Navbar";
import StreamersSlider from "../../../components/StreamersSlider/StreamersSlider";
import StreamerCard from "../../../components/UIComponents/StreamerCard";
import homeStyles from "./home.module.scss";

const Home = () => {
	return (
		<div className={homeStyles.home}>
			<Navbar />
			<main>
				<StreamersSlider>
					<StreamerCard />
				</StreamersSlider>
			</main>
		</div>
	);
};

export default Home;

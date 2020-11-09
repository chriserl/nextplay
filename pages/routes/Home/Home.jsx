import Navbar from "../../../components/Navbar/Navbar";
import homeStyles from "./home.module.scss";

const Home = () => {
	return (
		<div className={homeStyles.home}>
			<Navbar />
		</div>
	);
};

export default Home;

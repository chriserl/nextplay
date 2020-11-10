import Navbar from "../../../components/Navbar/Navbar";
import newsStyles from "./news.module.scss";

const News = () => {
	return (
		<div className="newsPage">
			<Navbar />
			<p className="ph">And now, this is the news page</p>
		</div>
	);
};

export default News;

import Navbar from "../../../components/Navbar/Navbar";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
import newsStyles from "./news.module.scss";

const News = () => {
	let topics = ["action", "ubisoft"];
	return (
		<div className={newsStyles.newsPage}>
			<Navbar activePath="news" />
			<div className={newsStyles.newsHeader}>
				<p className={`h1 ${newsStyles.newsTitle}`}>
					Blazing news from the world of gaming
				</p>
				<div className={newsStyles.topicsSection}>
					<p className={`${newsStyles.topicsTitle} ph`}>Popular topics</p>
					<div className={newsStyles.topics}>
						{topics.map((topic) => (
							<div className={newsStyles.topicItem} key={topic}>
								<button className="primary-tab">
									<p className="ps">{topic}</p>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={newsStyles.newsGrid}>
				<NewsGrid />
			</div>
		</div>
	);
};

export default News;

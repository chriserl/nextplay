import newsgridStyles from "./newsgrid.module.scss";
import NewsCard from "../UIComponents/NewsCard";

const NewsGrid = ({ gridTitle, moreLink }) => {
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
		<div className={newsgridStyles.newsGrid}>
			<div className={`${newsgridStyles.gridTitle}`}>
				<p className={`h1 ${newsgridStyles.titleText}`}>{gridTitle}</p>
				{moreLink === "link" && (
					<button className={`primary-tab ps ${newsgridStyles.seemoreLink}`}>
						See more
					</button>
				)}
			</div>
			<div className={newsgridStyles.gridContainer}>
				{streamers.map((streamer) => (
					<NewsCard key={streamer} />
				))}
			</div>
		</div>
	);
};

export default NewsGrid;

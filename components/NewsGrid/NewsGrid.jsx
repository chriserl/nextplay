import Link from "next/link";
import newsgridStyles from "./newsgrid.module.scss";
import NewsCard from "../UIComponents/NewsCard";

const NewsGrid = ({ gridData, gridTitle, moreLink }) => {
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
					<Link href="/views/news">
						<a className={`primary-tab ps ${newsgridStyles.seemoreLink}`}>
							See more
						</a>
					</Link>
				)}
			</div>
			<div className={newsgridStyles.gridContainer}>
				{gridData.map((dataItem) => (
					<NewsCard key={dataItem.id} cardData={dataItem} />
				))}
			</div>
		</div>
	);
};

export default NewsGrid;

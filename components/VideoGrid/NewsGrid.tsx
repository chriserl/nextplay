import Link from "next/link";
import newsgridStyles from "./newsgrid.module.scss";
import NewsCard from "../UIComponents/NewsCard";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const NewsGrid = ({ gridData, gridTitle, moreLink }) => {
	if (gridData) {
		return (
			<div className={newsgridStyles.newsGrid}>
				<div className={`${newsgridStyles.gridTitle}`}>
					<p className={`h1 ${newsgridStyles.titleText}`}>{gridTitle}</p>
					{moreLink === "link" && (
						<Link href="/routes/news">
							<a className={`secondary-tab ps ${newsgridStyles.seemoreLink}`}>
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
	} else {
		return <LoadingScreen />;
	}
};

export default NewsGrid;

import Link from "next/link";
import newsgridStyles from "./newsgrid.module.scss";
import VideoCard from "../UIComponents/VideoCard";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const NewsGrid = ({ gridData, gridTitle }) => {
	if (gridData) {
		return (
			<div className={newsgridStyles.newsGrid}>
				<p className={`${newsgridStyles.gridTitle} pl`}>
					{gridTitle.slice(0, 18)}
					<span className={`${newsgridStyles.titleEmphasis} plb`}>
						{gridTitle.slice(18)}
					</span>
				</p>
				<div className={newsgridStyles.gridContainer}>
					{gridData.map((dataItem) => (
						<VideoCard videoData={dataItem} />
					))}
				</div>
			</div>
		);
	} else {
		return <LoadingScreen />;
	}
};

export default NewsGrid;

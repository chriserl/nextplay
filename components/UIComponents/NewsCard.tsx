import Link from "next/link";

const NewsCard = ({ cardData }) => {
	return (
		<div className="news-card">
			<div className="news-body">
				<div className="news-info">
					<p className="news-headline plb">{cardData.webTitle}</p>
				</div>
			</div>
			<div className="body-bottom">
				<div className="news-date">
					<p className="px light-icon-button">{cardData.sectionName}</p>
				</div>
				<a href={cardData.webUrl} target="_blank">
					<button className="link-button px">read more</button>
				</a>
			</div>
		</div>
	);
};

export default NewsCard;

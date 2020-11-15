import Link from "next/link";

const NewsCard = ({ cardData }) => {
	return (
		<div className="news-card">
			<div className="news-date">
				<p className="px live-tab">21 . 12 . 2020</p>
			</div>
			<img
				src={cardData.image["original"]}
				alt="news"
				className="news-image"
				loading="lazy"
			/>
			<div className="news-body">
				<div className="news-info">
					<p className="news-headline psb">{cardData.title}</p>
				</div>
				<Link href={`/newsbulletin/${cardData.id}`}>
					<a className="light-icon-button">
						<span className="mdo-icon small-icon">link</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default NewsCard;

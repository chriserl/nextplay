import Link from "next/link";

const NewsCard = () => {
	return (
		<div className="news-card">
			<div className="news-date">
				<p className="px live-tab">21 . 12 . 2020</p>
			</div>
			<img
				src="/images/streams/blackpanther.jpg"
				alt="news"
				className="news-image"
				loading="lazy"
			/>
			<div className="news-body">
				<div className="news-info">
					<p className="news-headline psb">Are we ready to launch?</p>
				</div>
				<Link href="/newsbulletin/bulletinpage">
					<a className="light-icon-button">
						<span className="mdo-icon small-icon">link</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default NewsCard;

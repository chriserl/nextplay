import { FunctionComponent } from "react";
import Link from "next/link";

const LivestreamCard = ({ cardData }) => {
	return (
		<div className="livestream-card">
			<div className="stream-stats">
				<p className="pxb live-tab">Live</p>
				<p className="psb watching">
					<span className="mdo-icon">account_circle</span> 15k
				</p>
			</div>
			<img
				src={cardData.streamerImage}
				alt="stream"
				className="stream-image"
				loading="lazy"
			/>
			<div className="stream-card-body">
				<p className="stream-channel plb">
					{cardData.streamerName.length > 8
						? `${cardData.streamerName.slice(0, 8)}...`
						: cardData.streamerName}
				</p>
				<Link href={cardData.streamerUrl}>
					<a target="_blank">
						<button className="link-icon-button">
							<span className="small-icon mdo-icon">send</span>
						</button>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default LivestreamCard;

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
				src={cardData.channelLogo}
				alt="stream"
				className="stream-image"
				loading="lazy"
			/>
			<div className="stream-card-body">
				<p className="stream-channel plb">{cardData.channel}</p>
				<Link href={cardData.channelUrl}>
					<a target="_blank">
						<button className="light-icon-button">
							<span className="small-icon mdo-icon">send</span>
						</button>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default LivestreamCard;

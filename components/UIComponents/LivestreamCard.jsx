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
				src={cardData.logoUrl}
				alt="stream"
				className="stream-image"
				loading="lazy"
			/>
			<div className="stream-card-body">
				<p className="stream-channel plb">{cardData.channel}</p>
				<button className="icon-button-shadowless">
					<span className="small-icon mdo-icon">send</span>
				</button>
			</div>
		</div>
	);
};

export default LivestreamCard;

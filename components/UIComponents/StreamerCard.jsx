const StreamerCard = ({ cardData }) => {
	return (
		<div className="streamer-card">
			<img src={cardData.logoUrl} alt="streamer" className="streamer-image" />
			<div className="streamer-card-info">
				<p className="streamer-name psb">{cardData.channel}</p>
				<p className="followers px">{cardData.followers}</p>
			</div>
		</div>
	);
};

export default StreamerCard;

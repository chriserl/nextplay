const StreamerCard = ({ cardData }) => {
	return (
		<a target="_blank" href={cardData.channelUrl} className="streamer-card">
			<img src={cardData.logoUrl} alt="streamer" className="streamer-image" />
			<div className="streamer-card-info">
				<p className="streamer-name psb">{cardData.channel}</p>
				<p className="followers px">{cardData.followers}</p>
			</div>
		</a>
	);
};

export default StreamerCard;

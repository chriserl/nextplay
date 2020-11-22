const StreamerCard = ({ cardData }) => {
	return (
		<a target="_blank" href={cardData.channelUrl} className="streamer-card">
			<img
				src={cardData.channelImage}
				alt="streamer"
				className="streamer-image"
			/>
			<div className="streamer-card-info">
				<p className="streamer-name psb">
					{cardData.channelName.length > 12
						? cardData.channelName.slice(0, 12)
						: cardData.channelName}
				</p>
				<p className="followers px">
					{cardData.channelTitle.length > 14
						? cardData.channelTitle.slice(0, 14)
						: cardData.channelTitle}
				</p>
			</div>
		</a>
	);
};

export default StreamerCard;

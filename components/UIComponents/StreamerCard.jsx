const StreamerCard = () => {
	return (
		<div className="streamer-card">
			<img
				src="/images/games/fortnite.jpg"
				alt="streamer"
				className="streamer-image"
			/>
			<div className="streamer-card-info">
				<p className="streamer-name psb">Ninja</p>
				<p className="followers px">12k Followers</p>
			</div>
		</div>
	);
};

export default StreamerCard;

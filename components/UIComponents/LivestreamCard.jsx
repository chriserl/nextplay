const LivestreamCard = () => {
	return (
		<div className="livestream-card">
			<div className="stream-stats">
				<p className="pxb live-tab">Live</p>
				<p className="psb watching">
					<span className="las la-user"></span> 15k
				</p>
			</div>
			<img
				src="/images/streams/strange.jpg"
				alt="stream"
				className="stream-image"
			/>
			<div className="stream-card-body">
				<p className="stream-channel plb">Ninja</p>
				<button className="icon-button-shadowless">
					<span className="small-icon las la-paper-plane"></span>
				</button>
			</div>
		</div>
	);
};

export default LivestreamCard;

import { FunctionComponent } from "react";

const VideoCard: FunctionComponent = () => {
	return (
		<div className="video-card">
			<a href="/">
				<img
					src="/images/games/fortnite.jpg"
					alt="jade"
					className="video-thumbnail"
				/>
			</a>
			<div className="video-info">
				<div className="main-info">
					<a href="/" className="video-title plb">
						2020 MacBook Pro with M1 Chips
					</a>
					<a href="/" className="video-channel psb">
						Dave Lee
					</a>
					<div className="views-likes">
						<div className="views">
							<span className="md-icon small-icon">visibility</span>
							<p className="views-count ps">20</p>
						</div>
						<div className="likes">
							<p className="video-age ps">2020-01-16</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;

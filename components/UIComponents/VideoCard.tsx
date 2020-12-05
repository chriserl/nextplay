import { FunctionComponent } from "react";

const VideoCard: FunctionComponent<{ videoData: object }> = ({ videoData }) => {
	return (
		<div className="video-card">
			<a href={videoData["channel"]["url"]}>
				<img
					src={videoData["preview"]["large"]}
					alt="jade"
					className="video-thumbnail"
				/>
			</a>
			<div className="video-info">
				<div className="main-info">
					<a href={videoData["channel"]["url"]} className="video-title plb">
						{videoData["channel"]["description"].slice(0, 28)}
					</a>
					<a href={videoData["channel"]["url"]} className="video-channel psb">
						{videoData["channel"]["display_name"]}
					</a>
					<div className="views-likes">
						<div className="views">
							<span className="material-icons small-icon">visibility</span>
							<p className="views-count ps">{videoData["viewers"]}</p>
						</div>
						<div className="likes">
							<p className="video-age ps">
								{videoData["created_at"].slice(0, 10)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;

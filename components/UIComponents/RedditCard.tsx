import { FunctionComponent } from "react";

const RedditCard: FunctionComponent<{ postData: object }> = ({ postData }) => {
	if (postData !== null) {
		return (
			<div className="reddit-card">
				<p className="date-created pxb">{postData["created"].slice(0, 10)}</p>
				{postData["image"] && (
					<a href={postData["url"]}>
						<img
							src={postData["image"]}
							alt={postData["text"]}
							className="card-image"
						/>
					</a>
				)}
				<div className="card-body">
					<div className="card-body__header">
						<a href={postData["username_url"]} className="user-name plb">
							{postData["name"]}
						</a>
						{/*  */}
					</div>
					<a href={postData["url"]} className="post-text ps">
						{postData["text"].length > 96
							? `${postData["text"].slice(0, 148)} . . .`
							: postData["text"]}
					</a>
				</div>
			</div>
		);
	} else {
		return <div className="reddit-card"></div>;
	}
};

export default RedditCard;

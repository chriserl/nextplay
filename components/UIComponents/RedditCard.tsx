import { FunctionComponent } from "react";

const RedditCard: FunctionComponent = () => {
	return (
		<div className="reddit-card">
			<img
				src="/images/games/fortnite.jpg"
				alt="fortinte"
				className="card-image"
			/>
			<div className="card-body">
				<div className="card-body__header">
					<a href="#" className="user-name plb">
						Poppins Madre
					</a>
					<p className="date-created pxb">2020-03-19</p>
				</div>
				<p className="post-text ps">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
		</div>
	);
};

export default RedditCard;

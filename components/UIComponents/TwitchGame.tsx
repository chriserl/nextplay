import { FunctionComponent } from "react";

const TwitchGame: FunctionComponent = () => {
	return (
		<div className="twitch-game">
			<img
				src="/images/games/fortnite.jpg"
				alt="twitch game"
				className="game-image"
			/>
			<div className="card-body">
				<p className="game-name plb">Fortnite</p>
			</div>
		</div>
	);
};

export default TwitchGame;

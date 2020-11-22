import { FunctionComponent } from "react";

const TwitchGame: FunctionComponent<{ gameData: object }> = ({ gameData }) => {
	return (
		<div className="twitch-game">
			<img
				src={gameData && gameData["gameImage"]}
				alt="twitch game"
				className="game-image"
			/>
			<div className="card-body">
				<p className="game-name ps">{gameData && gameData["gameName"]}</p>
			</div>
		</div>
	);
};

export default TwitchGame;

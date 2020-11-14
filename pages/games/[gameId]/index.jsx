import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";
import gamepageStyles from "./gamepage.module.scss";

const GamePage = () => {
	let { gameId } = useRouter().query;

	let [game, setGame] = useState();

	let getGame = async () => {
		axios
			.post("http://localhost:3000/api/rawgapi/", {
				requestType: "gameDetails",
				gameId,
			})
			.then((rawgameData) => rawgameData.data["gameDetails"])
			.then((gameData) => {
				let gameInfo = {
					gameName: gameData["name"],
					gameAchievements: gameData["achievements_count"],
					gameImage: gameData["background_image"],
					gameWebsite: gameData["website"],
					gameRating: gameData["rating"],
					gameCriticScore: gameData["metacritic"],
					gameDescription: gameData["description_raw"],
					gamePublishers: gameData["publishers"].map(
						(publisher) => publisher["name"]
					),
				};
				setGame(() => gameInfo);
			})
			.catch((error) => console.error(error));
	};

	useEffect(() => getGame(), []);

	if (game !== undefined) {
		return (
			<div className={gamepageStyles.gamePage}>
				<Navbar />

				<main>
					<div className={gamepageStyles.gameInfo}>
						<div className={gamepageStyles.gamecardSection}>
							<div className="large-game-card">
								<img
									src={game.gameImage && game.gameImage}
									alt="fortnite"
									className="game-image"
								/>
								<div className="game-details">
									<p className="publishers-title pxb">Publishers</p>
									{game["gamePublishers"] &&
										game["gamePublishers"].map((publisher) => (
											<p key={publisher} className="game-company ps">
												{publisher}
											</p>
										))}
									<p className="game-name h1">{game.gameName}</p>
									<Link href={game.gameWebsite}>
										<a className="primary-tab">
											<p className="ps">Official Website</p>
											<span className="mdo-icon small-icon">
												arrow_right_alt
											</span>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className={gamepageStyles.gameStats}>
							<ul className={gamepageStyles.statsActual}>
								<li className={`${gamepageStyles.statItem} achievements`}>
									<p className={`${gamepageStyles.statType} ps`}>
										Achievements
									</p>
									<p className={`${gamepageStyles.statValue} ph`}>
										{game.gameAchievements}
									</p>
								</li>
								<li className={`${gamepageStyles.statItem} metacritic`}>
									<p className={`${gamepageStyles.statType} ps`}>
										Metacritic Score
									</p>
									<p className={`${gamepageStyles.statValue} ph`}>
										{game.gameCriticScore}
									</p>
								</li>
								<li className={`${gamepageStyles.statItem} rating`}>
									<p className={`${gamepageStyles.statType} ps`}>Rating</p>
									<p className={`${gamepageStyles.statValue} ph`}>
										{game.gameRating}
									</p>
								</li>
							</ul>
							<div className={gamepageStyles.gameAbout}>
								<p className={`${gamepageStyles.aboutTitle} pl`}>
									More about <span className="plb">{game.gameName}</span>
								</p>
								<p className={`${gamepageStyles.aboutText} ps`}>
									{game.gameDescription}
								</p>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	} else {
		return (
			<div className={gamepageStyles.gamePage}>
				<Navbar />
				<LoadingScreen />
			</div>
		);
	}
};

export default GamePage;

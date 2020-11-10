import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../../components/Navbar/Navbar";
import gamepageStyles from "./gamepage.module.scss";

const GamePage = () => {
	let { gameId } = useRouter().query;
	return (
		<div className={gamepageStyles.gamePage}>
			<Navbar />

			<main>
				<div className={gamepageStyles.gameInfo}>
					<div className={gamepageStyles.gamecardSection}>
						<div className="large-game-card">
							<img
								src={`/images/games/${gameId}.jpg`}
								alt="fortnite"
								className="game-image"
							/>
							<div className="game-details">
								<p className="game-company ps">Epic Games</p>
								<p className="game-name h1">Ghost Recon Breakpoint</p>
								<Link href="/">
									<a className="primary-tab">
										<p className="ps">Official Website</p>
										<span className="las la-long-arrow-alt-right"></span>
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className={gamepageStyles.gameStats}>
						<ul className={gamepageStyles.statsActual}>
							<li className={`${gamepageStyles.statItem} downloads`}>
								<p className={`${gamepageStyles.statType} ps`}>Downloads</p>
								<p className={`${gamepageStyles.statValue} ph`}>5.21k</p>
							</li>
							<li className={`${gamepageStyles.statItem} rating`}>
								<p className={`${gamepageStyles.statType} ps`}>Critics</p>
								<p className={`${gamepageStyles.statValue} ph`}>86%</p>
							</li>
							<li className={`${gamepageStyles.statItem} completions`}>
								<p className={`${gamepageStyles.statType} ps`}>Completions</p>
								<p className={`${gamepageStyles.statValue} ph`}>4.86k</p>
							</li>
						</ul>
						<div className={gamepageStyles.gameAbout}>
							<p className={`${gamepageStyles.aboutTitle} pl`}>
								More about <span className="plb">Fortnite</span>
							</p>
							<p className={`${gamepageStyles.aboutText} ps`}>
								Fortnite is an online video game developed by Epic Games and
								released in 2017. It is available in three distinct game mode
								versions: Fortnite: Save the World, Fortnite Battle Royale and
								Fortnite Creative.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default GamePage;

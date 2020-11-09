import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../../components/Navbar/Navbar";
import discoverStyles from "./discover.module.scss";

const Discover = () => {
	let longPath = useRouter().route;
	let shortPath = longPath.slice(7);
	let filters = ["action", "adventure", "military", "sports", "movie"];
	let games = [
		{
			gameName: "Call of Duty",
			gameDowloads: "45k",
			imagePath: "cod.jpg",
			gameKey: "cod",
		},
		{
			gameName: "Counter Strike",
			gameDowloads: "10k",
			imagePath: "cs.jpg",
			gameKey: "cs",
		},
		{
			gameName: "Fortnite",
			gameDowloads: "150k",
			imagePath: "fn.jpg",
			gameKey: "fn",
		},
		{
			gameName: "Ghost of Tsushima",
			gameDowloads: "16k",
			imagePath: "got.jpg",
			gameKey: "got",
		},
		{
			gameName: "Ghost Recon Breakpoint",
			gameDowloads: "170k",
			imagePath: "grb.jpg",
			gameKey: "grb",
		},
		{
			gameName: "Red Redemption Red",
			gameDowloads: "15k",
			imagePath: "rdr.jpg",
			gameKey: "rdr",
		},
	];

	return (
		<div>
			<Navbar activePath={shortPath} />

			<main className={discoverStyles.discover}>
				<div className={discoverStyles.header}>
					<form className={discoverStyles.headerForm}>
						<div className="search-control">
							<input
								type="search"
								name="discoverSearch"
								className="search-input"
								placeholder="search for games"
							/>
							<button className="icon-button">
								<span className="las la-search small-icon"></span>
							</button>
						</div>
					</form>

					<button
						className={`light-icon-button ${discoverStyles.filterButton}`}
					>
						<span className="las la-sliders-h small-icon"></span>
					</button>
				</div>
				<div className={discoverStyles.filters}>
					<p className={`ph ${discoverStyles.filtersHeader}`}>Filters</p>
					<div className={discoverStyles.filterItems}>
						{filters.map((filterItem) => (
							<div className={discoverStyles.filterItem} key={filterItem}>
								<p className="tab ps">{filterItem}</p>
							</div>
						))}
					</div>
				</div>

				<section className={discoverStyles.games}>
					<ul className={discoverStyles.gamesList}>
						{games.map((game) => (
							<li className={discoverStyles.gameItem} key={game.gameKey}>
								<div className="game-card">
									<img
										src={`/images/games/${game.imagePath}`}
										alt="game"
										className="game-image"
									/>
									<Link href="/">
										<a className="game-title plb">
											{game.gameName.length > 14
												? `${game.gameName.slice(0, 14)}...`
												: game.gameName}
										</a>
									</Link>
									<p className="game-downloads ps">{`${game.gameDowloads} Downloads`}</p>
								</div>
							</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
};

export default Discover;

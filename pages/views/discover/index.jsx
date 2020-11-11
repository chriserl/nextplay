import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../../components/Navbar/Navbar";
import discoverStyles from "./discover.module.scss";

const Discover = () => {
	let longPath = useRouter().route;
	let shortPath = longPath.slice(7);
	let games = [
		{
			gameName: "Call of Duty",
			gameDowloads: "45k",
			imagePath: "callofduty.jpg",
			gameKey: "callofduty",
		},
		{
			gameName: "Counter Strike",
			gameDowloads: "10k",
			imagePath: "counterstrike.jpg",
			gameKey: "counterstrike",
		},
		{
			gameName: "Fortnite",
			gameDowloads: "150k",
			imagePath: "fortnite.jpg",
			gameKey: "fortnite",
		},
		{
			gameName: "Ghost of Tsushima",
			gameDowloads: "16k",
			imagePath: "ghostoftsushima.jpg",
			gameKey: "ghostoftsushima",
		},
		{
			gameName: "Ghost Recon Breakpoint",
			gameDowloads: "170k",
			imagePath: "ghostreconbreakpoint.jpg",
			gameKey: "ghostreconbreakpoint",
		},
		{
			gameName: "Red Redemption Red",
			gameDowloads: "15k",
			imagePath: "redredemptionred.jpg",
			gameKey: "redredemptionred",
		},
	];

	let filterRef = useRef(null);

	let [filters, setFilters] = useState(() => []);

	let [filterSearchState, setFilterSearchState] = useState(() => {
		return { searchbarStatus: true };
	});

	let [filterItem, setFilterItem] = useState(() => {
		return { currentFilter: "" };
	});

	let setFilterFocus = () => {
		filterRef.current.focus();
	};

	let handleFilterButton = () => {
		setFilterFocus();
		setFilterSearchState(() => ({
			searchbarStatus: filterSearchState.searchbarStatus ? false : true,
		}));
	};

	let handleFilterInput = (event) => {
		event.preventDefault();
		setFilterItem(() => {
			return { currentFilter: event.target.value };
		});
	};

	let handleFilterSubmit = (event) => {
		event.preventDefault();
		if (filterItem.currentFilter !== "") {
			setFilters(() => filters.concat(filterItem.currentFilter));
			setFilterItem(() => {
				return { currentFilter: "" };
			});
		}
	};

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
								<span className="md-icon small-icon">search</span>
							</button>
						</div>
					</form>
				</div>
				<div className={discoverStyles.filters}>
					<div className={discoverStyles.filtersHeader}>
						<p className={`ph ${discoverStyles.headerTitle}`}>Filters</p>

						<form
							onSubmit={(submitEvent) => handleFilterSubmit(submitEvent)}
							className={discoverStyles.filterForm}
						>
							<div
								className={`search-control ${
									filterSearchState.searchbarStatus &&
									discoverStyles.filterSearch
								}`}
							>
								<input
									onChange={(changeEvent) => handleFilterInput(changeEvent)}
									type="search"
									value={filterItem.currentFilter}
									placeholder="type keyword and press enter"
									className={`search-input`}
									ref={filterRef}
								/>
							</div>

							<button
								type="button"
								onClick={() => handleFilterButton()}
								className={`light-tab ${
									filterSearchState.searchbarStatus
										? discoverStyles.filterButton
										: discoverStyles.hideFilterButton
								}`}
							>
								<span className="md-icon small-icon">add</span>
								<p className="px">Add filter</p>
							</button>
						</form>
					</div>

					<div className={discoverStyles.filterItems}>
						{filters.map((filterItem) => (
							<div className={discoverStyles.filterItem} key={filterItem}>
								<button className="primary-tab">
									<p className="ps">{filterItem}</p>
								</button>
							</div>
						))}
					</div>
				</div>

				<section className={discoverStyles.games}>
					<ul className={discoverStyles.gamesList}>
						{games.map((game) => (
							<li className={discoverStyles.gameItem} key={game.gameKey}>
								<div className="game-card">
									<Link href={`/games/${game.gameKey}`}>
										<img
											src={`/images/games/${game.imagePath}`}
											alt="game"
											className="game-image"
											loading="lazy"
										/>
									</Link>
									<Link href={`/games/${game.gameKey}`}>
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

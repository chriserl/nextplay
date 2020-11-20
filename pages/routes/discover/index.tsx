import { NextPage } from "next";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../../components/Navbar/Navbar";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";
import discoverStyles from "./discover.module.scss";

const Discover: NextPage = () => {
	let [games, setGames] = useState(() => []);

	interface GameData {
		gameId: number;
		gameName: string;
		gameImage: string;
	}

	const getGames = () => {
		axios
			.post("http://localhost:3000/api/rawgapi/getgames", {})
			.then((gamesRes) => gamesRes.data["gamesList"]["results"])
			.then((gamesList) => {
				let gamesArray = [];
				gamesList.forEach((game) => {
					let gameData: GameData = {
						gameId: game["id"],
						gameName: game["name"],
						gameImage: game["background_image"],
					};
					gamesArray.push(gameData);
				});
				setGames(() => gamesArray);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => getGames());

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

	if (games.length > 0) {
		return (
			<div>
				<Navbar activePath={"discover"} />

				<main className={discoverStyles.discover}>
					<div className={discoverStyles.header}>
						<form className={discoverStyles.headerForm}>
							<div className="search-control">
								<input
									type="search"
									name="discoverSearch"
									className="search-input"
									placeholder="search for games"
									autoComplete="off"
								/>
								<button className="sp-icon-button">
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
										autoComplete="off"
									/>
								</div>

								<button
									type="button"
									onClick={() => handleFilterButton()}
									className={`secondary-button ${
										filterSearchState.searchbarStatus
											? discoverStyles.filterButton
											: discoverStyles.hideFilterButton
									}`}
								>
									<p className="px">Add filter</p>
									<span className="md-icon small-icon">add</span>
								</button>
							</form>
						</div>

						<div className={discoverStyles.filterItems}>
							{filters.map((filterItem) => (
								<div className={discoverStyles.filterItem} key={filterItem}>
									<button className="secondary-tab">
										<p className="ps">{filterItem}</p>
									</button>
								</div>
							))}
						</div>
					</div>

					<section className={discoverStyles.games}>
						<ul className={discoverStyles.gamesList}>
							{games.map((game) => (
								<li className={discoverStyles.gameItem} key={game.gameId}>
									<div className="game-card">
										<Link href={`/games/${game.gameId}`}>
											<img
												src={game.gameImage}
												alt="game"
												className="game-image"
												loading="lazy"
											/>
										</Link>
										<Link href={`/games/${game.gameId}`}>
											<a className="game-title plb">
												{game.gameName.length > 14
													? `${game.gameName.slice(0, 14)}...`
													: game.gameName}
											</a>
										</Link>
										{/* <p className="game-downloads ps">{`${game.gameDowloads} Downloads`}</p> */}
									</div>
								</li>
							))}
						</ul>
					</section>
				</main>
			</div>
		);
	} else {
		return (
			<div>
				<Navbar activePath={"discover"} />
				<LoadingScreen />
			</div>
		);
	}
};

export default Discover;

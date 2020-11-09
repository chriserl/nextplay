import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar/Navbar";
import discoverStyles from "./discover.module.scss";

const Discover = () => {
	let longPath = useRouter().route;
	let shortPath = longPath.slice(7);
	let filters = ["action", "adventure", "military", "sports", "movie"];

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
			</main>
		</div>
	);
};

export default Discover;

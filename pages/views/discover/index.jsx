import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar/Navbar";
import discoverStyles from "./discover.module.scss";

const Discover = () => {
	let longPath = useRouter().route;
	let shortPath = longPath.slice(7);

	return (
		<div>
			<Navbar activePath={shortPath} />

			<main className={discoverStyles.discover}>
				<form className={discoverStyles.headerForm}>
					<div className="search-control">
						<input
							type="search"
							name="discoverSearch"
							className="search-input"
							placeholder="search for games"
						/>
						<button className="icon-button">
							<span className="las la-search"></span>
						</button>
					</div>
				</form>
			</main>
		</div>
	);
};

export default Discover;

import { FunctionComponent } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar/Navbar";
import homeStyles from "./home.module.scss";

interface pageCard {
	pageTitle: string;
	pageDescription: string;
	pageUrl: string;
	pageImage: string;
}

const Home: FunctionComponent = () => {
	let cardsList: pageCard[] = [
		{
			pageTitle: "Discover",
			pageDescription: "Explore all games",
			pageUrl: "/discover",
			pageImage: "fortnite.jpg",
		},
		{
			pageTitle: "Twitch",
			pageDescription: "Twitch gaming world",
			pageUrl: "/twitch",
			pageImage: "callofduty.jpg",
		},
		{
			pageTitle: "Account",
			pageDescription: "This feature will be availavle soon",
			pageUrl: "/account",
			pageImage: "ghostoftsushima.jpg",
		},
	];

	return (
		<div className={homeStyles.home}>
			<Navbar activePath="/" />

			<main className={homeStyles.main}>
				<div className={homeStyles.title}>
					<p className={`pl ${homeStyles.welcome}`}>Welcome</p>
					<p className={`h1 ${homeStyles.mainTitle}`}>
						Explore the world of games
					</p>
				</div>

				<ul className={homeStyles.categoriesList}>
					{cardsList.map((card) => (
						<li className="page-card" key={card.pageTitle}>
							<div className="page-image-container">
								<img
									src={`/images/games/${card.pageImage}`}
									alt="page"
									className="page-image"
								/>
							</div>
							<div className="card-body">
								<div className="card-text">
									<p className="page-title phb">{card.pageTitle}</p>
									<p className="page-description ps">{card.pageDescription}</p>
								</div>
								<Link href={`routes${card.pageUrl}`}>
									<a className="card-link">
										<button className="ps">
											{card.pageTitle}{" "}
											<span className="material-icons small-icon">
												arrow_right_alt
											</span>
										</button>
									</a>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
};

export default Home;

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
import newsStyles from "./news.module.scss";

const News = () => {
	let topics = ["action", "ubisoft"];

	let [articles, setArticles] = useState(() => []);

	const getHeadlines = () => {
		axios
			.post("http://localhost:3000/api/gamespotapi/", {
				requestType: "headlines",
				articlesNumber: 20,
			})
			.then((rawArticles) => rawArticles.data["articles"])
			.then((newsArticles) => setArticles(() => newsArticles))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getHeadlines();
	}, []);

	return (
		<div className={newsStyles.newsPage}>
			<Navbar activePath="news" />
			<div className={newsStyles.newsHeader}>
				<p className={`h1 ${newsStyles.newsTitle}`}>
					Blazing news from the world of gaming
				</p>
				<div className={newsStyles.topicsSection}>
					<p className={`${newsStyles.topicsTitle} ph`}>Popular topics</p>
					<div className={newsStyles.topics}>
						{topics.map((topic) => (
							<div className={newsStyles.topicItem} key={topic}>
								<button className="primary-tab">
									<p className="ps">{topic}</p>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
			<div gridData={articles} className={newsStyles.newsGrid}>
				<NewsGrid gridData={articles} />
			</div>
		</div>
	);
};

export default News;

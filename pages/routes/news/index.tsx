import { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
import newsStyles from "./news.module.scss";

const News: NextPage = () => {
	let topics = ["action", "ubisoft"];

	let [articles, setArticles] = useState(() => [1, 2, 3, 4, 5, 6]);

	interface HeadlinesRequestBody {
		requestType: string;
		articlesNumber: number;
	}

	const getHeadlines = () => {
		let requestBody: HeadlinesRequestBody = {
			requestType: "headlines",
			articlesNumber: 20,
		};
		axios
			.post("http://localhost:3000/api/guardianapi/", requestBody)
			.then((rawArticles) => rawArticles.data["articles"]["results"])
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
								<button className="secondary-button">
									<p className="ps">{topic}</p>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={newsStyles.newsGrid}>
				<NewsGrid gridTitle={""} moreLink={""} gridData={articles} />
			</div>
		</div>
	);
};

export default News;

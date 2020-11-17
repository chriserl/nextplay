import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";
import bulletinStyles from "./bulletin.module.scss";
import { NextPage } from "next";

const NewsBulletin: NextPage = () => {
	let pageId = useRouter().query["bulletinId"];
	let [articleData, setArticleData] = useState(() => ({
		image: "",
		title: "",
	}));

	const getArticle = (): void => {
		axios
			.post("https://nextplay.vercel.app/api/gamespotapi/", {
				requestType: "articleDetails",
				articleId: pageId,
			})
			.then((rawArticle) => rawArticle.data["articleDetails"][0])
			.then((articleInfo) => {
				console.log(articleInfo);
				setArticleData(() => articleInfo);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getArticle();
	}, []);

	if (articleData) {
		return (
			<div className={bulletinStyles.newsBulletin}>
				<Navbar activePath={""} />
				<div className={bulletinStyles.newsArticle}>
					<div className={bulletinStyles.imageContainer}>
						<img
							src={articleData.image["original"]}
							alt="fortnite"
							className={bulletinStyles.articleImage}
						/>
					</div>
					<div className={bulletinStyles.articleActual}>
						<div className={bulletinStyles.articleHeader}>
							<p className={`h1 ${bulletinStyles.articleHeadLine}`}>
								{articleData.title}
							</p>
							<div className={`${bulletinStyles.headlineDetails}`}>
								<p className={`pl primary-tab ${bulletinStyles.source}`}>
									verge
								</p>
								<p className={`pl ${bulletinStyles.date}`}>
									<span className="md-icon">date_range</span>
									12 . 09 . 2020
								</p>
							</div>
							<div className={bulletinStyles.detailsImages}>
								<img
									src="/images/games/fortnite.jpg"
									alt="rdr"
									className={bulletinStyles.detailsImage}
									loading="lazy"
								/>
								<img
									src="/images/games/redredemptionred.jpg"
									alt="rdr"
									className={bulletinStyles.detailsImage}
									loading="lazy"
								/>
								<img
									src="/images/games/callofduty.jpg"
									alt="rdr"
									className={bulletinStyles.detailsImage}
									loading="lazy"
								/>
								<img
									src="/images/games/ghostoftsushima.jpg"
									alt="rdr"
									className={bulletinStyles.detailsImage}
									loading="lazy"
								/>
							</div>
						</div>
						<div className={bulletinStyles.articlePassage}>
							<p className={`${bulletinStyles.passageText} pl`}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus magnam laudantium eveniet ratione eum sit quos nobis
								possimus laboriosam porro. Ex pariatur exercitationem, debitis
								quae laborum aut veritatis nam ut. Lorem ipsum dolor sit, amet
								consectetur adipisicing elit. Voluptates facere in doloribus
								culpa quod optio consectetur, cum id laudantium debitis
								veritatis officiis ex recusandae blanditiis sunt pariatur
								dolorem saepe soluta.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className={bulletinStyles.newsBulletin}>
				<Navbar activePath={""} />
				<LoadingScreen />
			</div>
		);
	}
};

export default NewsBulletin;

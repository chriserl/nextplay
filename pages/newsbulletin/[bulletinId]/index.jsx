import Navbar from "../../../components/Navbar/Navbar";
import bulletinStyles from "./bulletin.module.scss";

const NewsBulletin = () => {
	return (
		<div className={bulletinStyles.newsBulletin}>
			<Navbar />
			<div className={bulletinStyles.newsArticle}>
				<div className={bulletinStyles.imageContainer}>
					<img
						src="/images/games/fortnite.jpg"
						alt="fortnite"
						className={bulletinStyles.articleImage}
					/>
				</div>
				<div className={bulletinStyles.articleActual}>
					<div className={bulletinStyles.articleHeader}>
						<p className={`h1 ${bulletinStyles.articleHeadLine}`}>
							Fortnite has been removed from apple store
						</p>
						<div className={`${bulletinStyles.headlineDetails}`}>
							<p className={`pl primary-tab ${bulletinStyles.source}`}>verge</p>
							<p className={`pl ${bulletinStyles.date}`}>12 . 09 . 2020</p>
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
							magnam laudantium eveniet ratione eum sit quos nobis possimus
							laboriosam porro. Ex pariatur exercitationem, debitis quae laborum
							aut veritatis nam ut. Lorem ipsum dolor sit, amet consectetur
							adipisicing elit. Voluptates facere in doloribus culpa quod optio
							consectetur, cum id laudantium debitis veritatis officiis ex
							recusandae blanditiis sunt pariatur dolorem saepe soluta.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsBulletin;

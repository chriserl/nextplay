import Navbar from "../../../components/Navbar/Navbar";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../../Store.js/UserContext";
import StreamersSlider from "../../../components/StreamersSlider/StreamersSlider";
import LivestreamCard from "../../../components/UIComponents/LivestreamCard";
import StreamerCard from "../../../components/UIComponents/StreamerCard";
import NewsGrid from "../../../components/NewsGrid/NewsGrid";
import homeStyles from "./home.module.scss";

const Home = () => {
	let streamers = [
		"ninja",
		"davelee",
		"noisybutters",
		"jake",
		"yin",
		"tom",
		"oscar",
	];

	let [user, setUser] = useContext(UserContext);

	let [streams, setStreams] = useState(() => []);

	const getStreams = async () => {
		await fetch("http://localhost:3000/api/twitchapi/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				requestType: "topStreamers",
				accessToken: user["userAccessToken"],
			}),
		})
			.then((resource) => resource.json())
			.then((resourceArray) => resourceArray["streams"])
			.then((streamItems) => {
				let streamArray = [];
				streamItems.forEach((streamItem) => {
					let streamInfo = {
						channel: streamItem["_data"]["channel"]["display_name"],
						followers: streamItem["_data"]["channel"]["followers"],
						logoUrl: streamItem["_data"]["channel"].logo,
					};
					streamArray.push(streamInfo);
				});
				setStreams(() => streamArray);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => getStreams());

	return (
		<div className={homeStyles.home}>
			<Navbar activePath="home" />
			<main>
				<div className={homeStyles.streamers}>
					<StreamersSlider
						sliderContent={streams}
						sliderComponent={(sliderData) => (
							<StreamerCard cardData={sliderData} />
						)}
					/>
				</div>
				<div className={homeStyles.liveStreams}>
					{/* <StreamersSlider
						sliderComponent={() => <LivestreamCard />}
						sliderTitle="livestreams"
					/> */}
				</div>
				<div className={homeStyles.news}>
					<NewsGrid gridTitle="News from the gaming world" moreLink="link" />
				</div>
			</main>
		</div>
	);
};

export default Home;

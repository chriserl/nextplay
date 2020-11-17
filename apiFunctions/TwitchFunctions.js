import { ApiClient } from "twitch";
import { StaticAuthProvider } from "twitch-auth";

function TwitchFunctions(clientId, accessToken) {
	const authProvider = new StaticAuthProvider(clientId, accessToken);
	const apiClient = new ApiClient({ authProvider });

	this.getName = async () => {
		let userId = await apiClient
			.getTokenInfo()
			.then((tokenraw) => tokenraw.userName)
			.catch((error) => error);

		return userId;
	};

	this.getGames = async () => {
		let games = [];

		await apiClient
			.callApi({
				url: "games/top",
			})
			.then((gamesRes) => {
				gamesRes["top"].forEach((gamesItem) => {
					games.push(gamesItem["game"]);
				});
			});

		return games;
	};

	this.getTopStreamers = async () => {
		let streamers = await apiClient
			.callApi({
				url: "games/top",
			})
			.then((gamesRes) => {
				let rawGamesData = [];
				gamesRes["top"].forEach((gamesItem) => {
					rawGamesData.push(gamesItem["game"]["name"]);
				});
				return rawGamesData;
			})
			.then(async (gamesData) => {
				let streamersList = [];
				for (let gameData of gamesData) {
					let query = { game: gameData, limit: 1 };
					await apiClient
						.callApi({ url: "streams", query })
						.then((streamerRes) => {
							streamersList.push(streamerRes["streams"]);
						});
				}
				return streamersList;
			})
			.catch((error) => error);

		return streamers;
	};

	this.liveStreams = async () => {
		let liveStreamsList = [];

		await apiClient.kraken.streams
			.getAllLiveStreams()
			.then((apiRes) => {
				liveStreamsList = apiRes;
			})
			.catch((error) => error);

		return liveStreamsList;
	};
}

export default TwitchFunctions;

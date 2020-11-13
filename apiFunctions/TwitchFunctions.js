import { ApiClient, Stream } from "twitch";
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
		let games = await apiClient
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
			.then(async (dataRaw) => {
				let ming = [];
				for (let mandem of dataRaw) {
					let query = { game: mandem, limit: 1 };
					await apiClient.callApi({ url: "streams", query }).then((damsel) => {
						ming.push(damsel["streams"]);
					});
				}
				return ming;
			})
			.catch((error) => error);

		return games;
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

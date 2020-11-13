import { ApiClient } from "twitch";
import { StaticAuthProvider } from "twitch-auth";

function TwitchFunctions(clientId, accessToken) {
	const authProvider = new StaticAuthProvider(clientId, accessToken);
	const apiClient = new ApiClient({ authProvider });

	this.getName = async () => {
		let lamala;
		await apiClient
			.getTokenInfo()
			.then((tokenraw) => {
				lamala = tokenraw.userName;
			})
			.catch((error) => console.log(error));

		return lamala;
	};

	this.getGames = async () => {
		let games;

		await apiClient.helix.games
			.getTopGames()
			.then((rawGames) => {
				games = rawGames.data;
			})
			.catch((error) => {
				games = error;
			});

		return games;
	};

	this.getTopStreamers = async () => {
		let streams = await apiClient.kraken.streams.getStreams();

		return streams;
	};
}

export default TwitchFunctions;

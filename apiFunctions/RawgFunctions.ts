import axios from "axios";

export default function RawgFunctions(rawgApiKey: string) {
	let rawgKey: string = rawgApiKey;
	let rawgBaseUrl: string = "https://api.rawg.io/api/";

	this.getGames = async () => {
		let games: object[] = await axios
			.get(`${rawgBaseUrl}games`, {
				params: {
					key: rawgKey,
					page: 1,
					page_size: 20,
				},
			})
			.then((gamesRaw) => gamesRaw.data)
			.catch((error) => error);

		return games;
	};

	this.getGameDetails = async (gameId) => {
		let gameDetails = await axios
			.get(`${rawgBaseUrl}games/${gameId}`, {
				params: {
					key: rawgKey,
				},
			})
			.then((gamesRaw) => gamesRaw.data)
			.catch((error) => error);

		return gameDetails;
	};
}

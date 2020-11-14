import axios from "axios";

export default function RawgFunctions(rawgApiKey) {
	let rawgKey = rawgApiKey;
	let rawgBaseUrl = "https://api.rawg.io/api/";

	this.getGames = async () => {
		let games = await axios
			.get(`${rawgBaseUrl}games`, {
				params: {
					key: rawgApiKey,
					page: 1,
					page_size: 12,
				},
			})
			.then((gamesRaw) => gamesRaw.data)
			.catch((error) => error);

		return games;
	};
}

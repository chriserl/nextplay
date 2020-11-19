import axios from "axios";

export default function RawgFunctions(rawgApiKey: string) {
	let rawgKey: string = rawgApiKey;
	let rawgBaseUrl: string = "https://api.rawg.io/api/";

	this.getGames = async (gamesCount: number | 20) => {
		let games: object[] = await axios
			.get(`${rawgBaseUrl}games`, {
				params: {
					key: rawgKey,
					page: 1,
					page_size: gamesCount,
				},
			})
			.then((gamesRaw) => gamesRaw.data)
			.catch((error) => error);

		return games;
	};

	let getGameIds = async (idCount: number) => {
		let idsList: number[] = [];
		let games: object[] = await this.getGames(idCount).then(
			(rawGames) => rawGames["results"]
		);

		for await (let game of games) {
			idsList.push(game["id"]);
		}
		return idsList;
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

	this.getRedditPosts = async () => {
		let ids: number[] = await getGameIds(1);
		let posts: object[] = [];

		for await (let id of ids) {
			await axios
				.get(`${rawgBaseUrl}games/${id}/reddit`, {
					params: {
						key: rawgKey,
					},
				})
				.then((idReturn) => posts.push(idReturn.data["results"][0]));
		}

		return posts;
	};
}

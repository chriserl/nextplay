import axios from "axios";

interface GameData {
	gameId: number;
	gameName: string;
	gameImage: string;
}

export default function RawgFunctions(rawgApiKey: string) {
	let rawgKey: string = rawgApiKey;
	let rawgBaseUrl: string = "https://api.rawg.io/api/";

	const formatGames = async (rawGames: any) => {
		let formattedGames: object[] = [];

		for (let game of rawGames) {
			let gameData: GameData = {
				gameId: game["id"],
				gameName: game["name"],
				gameImage: game["background_image"],
			};
			formattedGames.push(gameData);
		}

		return formattedGames;
	};

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
			.catch(() => "api error");

		return games;
	};

	this.searchGames = async (
		searchQuery?: string | null,
		searchTags?: string[] | null
	) => {
		let rawGames: object[] | string = await axios
			.get(`${rawgBaseUrl}games`, {
				params: {
					key: rawgKey,
					...(searchQuery && { search: searchQuery }),
					...(searchTags && { tags: searchTags.join(",") }),
				},
			})
			.then((gamesRaw) => gamesRaw.data["results"])
			.then((gamesResults) => formatGames(gamesResults))
			.catch(() => "api error");

		return rawGames;
	};

	let getGameIds = async (idCount: number) => {
		let idsList: number[] | string = [];

		let games: object[] | string = await this.getGames(idCount).then(
			(rawGames) => rawGames["results"]
		);

		if (games === "api error") {
			idsList = "api error";
		} else {
			for await (let game of games) {
				idsList.push(game["id"]);
			}
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
			.catch(() => "api error");

		return gameDetails;
	};

	this.getRedditPosts = async () => {
		let ids: number[] | string = await getGameIds(5);

		let posts: any = [];

		if (ids === "api error") {
			posts = "api error";
		} else {
			for await (let id of ids) {
				await axios
					.get(`${rawgBaseUrl}games/${id}/reddit`, {
						params: {
							key: rawgKey,
						},
					})
					.then((idReturn) => posts.push(idReturn.data["results"][0]));
			}
		}

		return posts;
	};
}

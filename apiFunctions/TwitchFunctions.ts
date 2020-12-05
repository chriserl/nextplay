import axios from "axios";

interface channelInfo {
	channelName: string;
	channelTitle: string;
	channelImage: string;
	channelUrl: string;
}

interface streamInfo {
	streamerName: string;
	streamerImage?: string;
	streamerUrl: string;
	viewerCount: number;
	[key: string]: any;
}

interface GameData {
	gameId: number;
	gameName: string;
	gameImage: string;
}

function TwitchFunctions(clientId: string, authorization: string) {
	let baseUrl: string = "https://api.twitch.tv/helix/";
	let baseKrakenUrl: string = "https://api.twitch.tv/kraken/";
	let headers = {
		Authorization: `Bearer ${authorization}`,
		"client-id": clientId,
	};

	this.formatKrakenGames = (streamItem: object) => {
		let livestream: streamInfo = {
			streamerName: streamItem["channel"]["display_name"],
			streamerImage: streamItem["preview"]["large"],
			streamerUrl: streamItem["channel"]["url"],
			streamTime: streamItem["created_at"],
			viewerCount: streamItem["viewers"],
		};

		return livestream;
	};

	this.getGames = async (limit?: number) => {
		return await axios
			.get(`${baseUrl}games/top`, {
				params: {
					first: limit ? limit : 12,
				},
				headers,
			})
			.then((games) => games.data["data"])
			.catch(() => "api error");
	};

	this.getKrakenGames = async (limit?: number) => {
		let games: any = [];

		await axios
			.get(`${baseKrakenUrl}games/top`, {
				params: {
					limit: limit ? limit : 12,
				},
				headers: { ...headers, Accept: "application/vnd.twitchtv.v5+json" },
			})
			.then((rawResponse) => rawResponse.data["top"])
			.then((gamesRaw) => {
				gamesRaw.forEach((game) => {
					let gameData: GameData = {
						gameId: game["game"]["name"],
						gameName: game["game"]["name"],
						gameImage: game["game"]["box"]["large"],
					};
					games.push(gameData);
				});
			})
			.catch(() => (games = "api error"));

		return games;
	};

	this.getGamesList = async (listCriteria: "name" | "id", limit?: number) => {
		let gameNames: any = [];

		await this.getGames(limit && limit).then((games) => {
			if (games === "api error") {
				gameNames = "api error";
			} else {
				games.forEach((game) => {
					gameNames.push(game[listCriteria]);
				});
			}
		});

		return gameNames;
	};

	this.searchChannel = async (critiria: string, limit: number) => {
		return axios
			.get(`${baseUrl}search/channels`, {
				params: { query: critiria, first: limit },
				headers,
			})
			.then((channelResponse) => channelResponse.data);
	};

	this.getTopGameChannels = async () => {
		let gameNames = await this.getGamesList("name");
		let channels: object[] = [];

		for await (let gameName of gameNames) {
			let channel = await this.searchChannel(gameName, 1);
			let channelInfo: channelInfo = {
				channelName: channel["data"][0]["display_name"],
				channelTitle: channel["data"][0]["title"],
				channelImage: channel["data"][0]["thumbnail_url"],
				channelUrl: `https://twitch.tv${channel["data"][0]["display_name"]}`,
			};
			channels.push(channelInfo);
		}
		return channels;
	};

	this.getLivestreams = async () => {
		let livestreams: any = [];

		await axios
			.get(`${baseKrakenUrl}streams`, {
				params: {
					limit: 12,
				},
				headers: { ...headers, Accept: "application/vnd.twitchtv.v5+json" },
			})
			.then((rawResponse) => rawResponse.data["streams"])
			.then((streamData) =>
				streamData.forEach((streamData: object) => {
					let streamInfo: streamInfo = {
						streamerName: streamData["channel"]["name"],
						streamerImage: streamData["channel"]["logo"],
						streamerUrl: streamData["channel"]["url"],
						viewerCount: streamData["channel"]["views"],
					};
					livestreams.push(streamInfo);
				})
			)
			.catch(() => (livestreams = "api error"));

		return livestreams;
	};

	this.getGameLivestreams = async () => {
		let livestreams: any = [];

		let gameNames: any = await this.getGamesList("name", 1);

		for await (let gameName of gameNames) {
			await axios
				.get(`${baseKrakenUrl}streams`, {
					params: {
						limit: 4,
						game: gameName,
					},
					headers: { ...headers, Accept: "application/vnd.twitchtv.v5+json" },
				})
				.then((rawResponse) => livestreams.push(rawResponse.data["streams"]))
				.catch(() => (livestreams = "api error"));
		}

		return livestreams;
	};
}

export default TwitchFunctions;

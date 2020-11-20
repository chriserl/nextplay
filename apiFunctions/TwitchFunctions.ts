import axios from "axios";

interface channelInfo {
	channelName: string;
	channelTitle: string;
	channelImage: string;
	channelUrl: string;
}

interface streamInfo {
	streamerName: string;
	streamerImage: string;
	streamerUrl: string;
	viewerCount: number;
}

function TwitchFunctions(clientId: string, authorization: string) {
	let baseUrl: string = "https://api.twitch.tv/helix/";
	let baseKrakenUrl: string = "https://api.twitch.tv/kraken/";
	let headers = {
		Authorization: `Bearer ${authorization}`,
		"client-id": clientId,
	};

	this.getGames = async () => {
		return await axios
			.get(`${baseUrl}games/top`, {
				params: {
					first: 12,
				},
				headers,
			})
			.then((games) => games.data["data"])
			.catch(() => "api error");
	};

	this.getGamesList = async (listCriteria: "name" | "id") => {
		let gameNames: any = [];

		await this.getGames().then((games) => {
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
}

export default TwitchFunctions;

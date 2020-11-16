// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TwitchFunctions from "../../apiFunctions/TwitchFunctions";

let clientId: string = process.env.TWITCH_CLIENT_ID;

export default async (request, response) => {
	if (request.body["requestType"] === "games") {
		let accessToken: string = request.body["accessToken"];
		let TwitchFuncs = new TwitchFunctions(clientId, accessToken);
		let games: object[] = await TwitchFuncs.getGames();
		response.send(JSON.stringify({ gamesList: games }));
	}

	if (request.body["requestType"] === "liveStreams") {
		let accessToken = request.body["accessToken"];
		let TwitchFuncs = new TwitchFunctions(clientId, accessToken);
		let streams: object[] = await TwitchFuncs.liveStreams();
		response.send(JSON.stringify({ liveStreams: streams }));
	}

	if (request.body["requestType"] === "gameStreams") {
		let accessToken = request.body["accessToken"];
		let TwitchFuncs = new TwitchFunctions(clientId, accessToken);
		let streamers: object[] = await TwitchFuncs.getTopStreamers();
		response.send(JSON.stringify({ streamersList: streamers }));
	}
};

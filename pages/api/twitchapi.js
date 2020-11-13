// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TwitchFunctions from "../../apiFunctions/TwitchFunctions";
let clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

export default async (request, response) => {
	if (request.body["requestType"] === "liveStreams") {
		let accessToken = request.body["accessToken"];
		let TwitchFuncs = new TwitchFunctions(clientId, accessToken);
		let streams = await TwitchFuncs.liveStreams();
		response.send(JSON.stringify({ liveStreams: streams }));
	}

	if (request.body["requestType"] === "gameStreams") {
		let accessToken = request.body["accessToken"];
		let TwitchFuncs = new TwitchFunctions(clientId, accessToken);
		let games = await TwitchFuncs.getGames();
		response.send(JSON.stringify({ gamesList: games }));
	}
};

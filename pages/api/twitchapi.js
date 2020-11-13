// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TwitchFunctions from "../../apiFunctions/TwitchFunctions";
let clientId = process.env.CLIENT_ID;

export default async (request, response) => {
	if (request.body["requestType"] === "topStreamers") {
		let accessToken = request.body["accessToken"];
		let TwitchFuncs = new TwitchFunctions(clientId, accessToken);
		let streams = await TwitchFuncs.getTopStreamers();
		response.status = 200;
		response.send(JSON.stringify({ streams }));
	}
};

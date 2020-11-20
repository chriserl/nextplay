// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TwitchFunctions from "../../../apiFunctions/TwitchFunctions";

let clientId: string = process.env.TWITCH_CLIENT_ID;
let auth: string = process.env.TWITCH_AUTH_TOKEN;
let TwitchFuncs = new TwitchFunctions(clientId, auth);

export default async (request, response) => {
	let channels: object[] | string = await TwitchFuncs.getTopGameChannels();
	channels === "api error"
		? response.status(500)
		: response.send(JSON.stringify({ channels }));
};

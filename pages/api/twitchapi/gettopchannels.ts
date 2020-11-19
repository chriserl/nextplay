// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import TwitchFunctions from "../../../apiFunctions/TwitchFunctions";

let clientId: string = process.env.TWITCH_CLIENT_ID;
let auth: string = process.env.TWITCH_AUTH_TOKEN;
let TwitchFuncs = new TwitchFunctions(clientId, auth);

export default async (request, response) => {
	let channels: object[] = await TwitchFuncs.getTopGameChannels();
	console.log(channels);
	response.send(JSON.stringify({ channels }));
};

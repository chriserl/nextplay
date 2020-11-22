import RawgFunctions from "../../../apiFunctions/RawgFunctions";

let rawgKey: string = process.env.RAWG_API_TOKEN;

let rawg = new RawgFunctions(rawgKey);

export default async (request, response) => {
	let gameId = request.body["gameId"];
	let gameDetails: object[] | string = await rawg.getGameDetails(gameId);
	response.send(JSON.stringify({ gameDetails }));
};

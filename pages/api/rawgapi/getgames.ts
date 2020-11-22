import RawgFunctions from "../../../apiFunctions/RawgFunctions";

let rawgKey: string = process.env.RAWG_API_TOKEN;

let rawg = new RawgFunctions(rawgKey);

export default async (request, response) => {
	let games: object[] | string = await rawg.getGames();
	response.send(JSON.stringify({ gamesList: games }));
};

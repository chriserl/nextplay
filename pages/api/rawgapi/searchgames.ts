import RawgFunctions from "../../../apiFunctions/RawgFunctions";

let rawgKey: string = process.env.RAWG_API_TOKEN;

let rawg = new RawgFunctions(rawgKey);

export default async (request, response) => {
	let searchQuery = request.body["searchQuery"]
		? request.body["searchQuery"]
		: null;
	let searchTags = request.body["searchTags"]
		? request.body["searchTags"]
		: null;

	let games: object[] = await rawg.searchGames(searchQuery, searchTags);

	response.send(JSON.stringify({ gamesList: games }));
};

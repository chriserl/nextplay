import RawgFunctions from "../../apiFunctions/RawgFunctions";
let rawgKey = process.env.RAWG_API_TOKEN;

export default async (request, response) => {
	if (request.body["requestType"] === "games") {
		let rawg = new RawgFunctions(rawgKey);
		let games = await rawg.getGames();
		response.send(JSON.stringify({ gamesList: games }));
	}
};

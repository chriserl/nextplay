import RawgFunctions from "../../apiFunctions/RawgFunctions";

let rawgKey = process.env.RAWG_API_TOKEN;

let rawg = new RawgFunctions(rawgKey);

export default async (request, response) => {
	if (request.body["requestType"] === "games") {
		let games = await rawg.getGames();
		response.send(JSON.stringify({ gamesList: games }));
	}

	if (request.body["requestType"] === "gameDetails") {
		let gameId = request.body["gameId"];
		let gameDetails = await rawg.getGameDetails(gameId);
		response.send(JSON.stringify({ gameDetails }));
	}
};

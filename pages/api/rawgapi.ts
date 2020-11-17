import RawgFunctions from "../../apiFunctions/RawgFunctions";

let rawgKey: string = process.env.RAWG_API_TOKEN;

let rawg = new RawgFunctions(rawgKey);

export default async (request, response) => {
	if (request.body["requestType"] === "games") {
		let games: object[] = await rawg.getGames();
		response.send(JSON.stringify({ gamesList: games }));
	}

	if (request.body["requestType"] === "gameDetails") {
		let gameId = request.body["gameId"];
		let gameDetails: object[] = await rawg.getGameDetails(gameId);
		response.send(JSON.stringify({ gameDetails }));
	}
};

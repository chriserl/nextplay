import GamespotFunctions from "../../apiFunctions/GamespotFunctions";

let gamespotKey = process.env.GAMESPOT_API_KEY;

let gamespot = new GamespotFunctions(gamespotKey);

export default async (request, response) => {
	if (request.body["requestType"] === "headlines") {
		let articlesNumber = request.body["articlesNumber"];
		let articles = await gamespot.getHeadlines(articlesNumber);
		response.send(JSON.stringify({ articles }));
	}

	if (request.body["requestType"] === "articleDetails") {
		let articleId = request.body["articleId"];
		let articleDetails = await gamespot.getHeadlines(articleId);
		response.send(JSON.stringify({ articleDetails }));
	}
};

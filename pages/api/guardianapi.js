import GuardianFunctions from "../../apiFunctions/GuardianFunctions";

let guardianApiKey = process.env.GUARDIAN_API_KEY;

let guardian = new GuardianFunctions(guardianApiKey);

export default async (request, response) => {
	if (request.body["requestType"] === "headlines") {
		let articlesNumber = request.body["articlesNumber"];
		let articles = await guardian.getHeadlines(articlesNumber);
		response.send(JSON.stringify({ articles }));
	}

	// if (request.body["requestType"] === "articleDetails") {
	// 	let articleId = request.body["articleId"];
	// 	let articleDetails = await gamespot.getHeadlines(articleId);
	// 	response.send(JSON.stringify({ articleDetails }));
	// }
};

import GuardianFunctions from "../../apiFunctions/GuardianFunctions";

let guardianApiKey: string = process.env.GUARDIAN_API_KEY;

let guardian = new GuardianFunctions(guardianApiKey);

export default async (request, response) => {
	if (request.body["requestType"] === "headlines") {
		let articlesNumber = request.body["articlesNumber"];
		let articles: object[] = await guardian.getHeadlines(articlesNumber);
		response.send(JSON.stringify({ articles }));
	}
};

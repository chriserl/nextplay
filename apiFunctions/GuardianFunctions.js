import axios from "axios";

export default function GuardianFunctions(guardianApiKey) {
	let baseUrl = "https://content.guardianapis.com/";

	this.getHeadlines = async (articleNumber) => {
		let headlines = await axios
			.get(`${baseUrl}search?q=gaming&api-key=${guardianApiKey}`)
			.then((rawNews) => rawNews.data["response"]);
		return headlines;
	};
}

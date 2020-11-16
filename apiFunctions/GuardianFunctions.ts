import axios from "axios";

export default function GuardianFunctions(guardianApiKey) {
	let baseUrl: string = "https://content.guardianapis.com/";

	this.getHeadlines = async (articleNumber: number) => {
		let headlines: object[] = await axios
			.get(`${baseUrl}search?q=gaming&api-key=${guardianApiKey}`)
			.then((rawNews) => rawNews.data["response"]);
		return headlines;
	};
}

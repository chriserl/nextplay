import axios from "axios";

export default function GamespotFunctions(gamespotApiKey) {
	let baseUrl = "http://www.gamespot.com/api/articles/";

	this.getHeadlines = async (articleNumber) => {
		let headlines = await axios
			.get(baseUrl, {
				params: {
					api_key: gamespotApiKey,
					format: "json",
					field_list: "id,title,image",
					limit: articleNumber,
				},
			})
			.then((rawResponse) => rawResponse.data["results"]);

		return headlines;
	};

	this.getArticle = async (articleId) => {
		let article = await axios
			.get("http://www.gamespot.com/api/articles/", {
				api_key: gamespotApiKey,
				format: "json",
				filter: `id:${articleId}`,
				limit: 1,
				field_list: "id,authors,title,body,image,publish_date",
			})
			.then((rawResponse) => rawResponse.data);

		return article;
	};
}

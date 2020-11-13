export default function TwitchUtils() {
	let baseUrl = "http://localhost:3000/api/twitch/";

	// let getTokenUrl = async () => {
	// 	await fetch("http://localhost:3000/api/twitchapi", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({ getAccessToken: "getAccessToken" }),
	// 	})
	// 		.then((urlResponse) => urlResponse.json())
	// 		.then((urlObject) => urlObject["accessTokenUrl"])
	// 		.catch((error) => error);
	// };

	this.getTopStreams = async () => {
		await fetch(baseUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ requestType: "topStreamers" }),
		})
			.then((twitchRespose) => twitchRespose.json())
			.then((jsonedResponse) => jsonedResponse)
			.catch((error) => error);
	};
}

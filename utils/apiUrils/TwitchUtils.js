export default function TwitchUtils() {
	let baseUrl = "http://localhost:3000/api/twitch/";

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

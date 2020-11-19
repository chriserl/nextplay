import RawgFunctions from "../../../apiFunctions/RawgFunctions";

let rawgKey: string = process.env.RAWG_API_TOKEN;

let rawg = new RawgFunctions(rawgKey);

export default async (request, response) => {
	let redditPosts: object[] = await rawg.getRedditPosts();
	response.send(JSON.stringify({ redditPosts }));
};

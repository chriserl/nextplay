import { FaunaFunctions } from "../../../apiFunctions/FaunaFunctions";

let faunaKey: string = process.env.FAUNA_DATABASE_SECRET;

let faunaFuncs = new FaunaFunctions(faunaKey);

export default async (request, response) => {
	await faunaFuncs.logout();
	response.send(JSON.stringify({ faunaresponse: "User Logged out" }));
};

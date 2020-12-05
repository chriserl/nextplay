import { FaunaFunctions } from "../../../apiFunctions/FaunaFunctions";

let faunaKey: string = process.env.FAUNA_DATABASE_SECRET;

let faunaFuncs = new FaunaFunctions(faunaKey);

interface loginData {
	userEmail: string;
	userPassword: string;
}

export default async (request, response) => {
	let userCredentials: loginData = request.body["userCredentials"];
	let faunaresponse = await faunaFuncs.login(userCredentials);
	faunaresponse === "authentication failed"
		? response.status(500).json({ faunaresponse })
		: response.send(JSON.stringify({ faunaresponse }));
};

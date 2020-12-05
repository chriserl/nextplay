import { FaunaFunctions } from "../../../apiFunctions/FaunaFunctions";

let faunaKey: string = process.env.FAUNA_DATABASE_SECRET;

let faunaFuncs = new FaunaFunctions(faunaKey);

interface newAccountData {
	credentials: { password: string };
	data: {
		userName: string;
		userEmail: string;
	};
}

export default async (request, response) => {
	const userInfo: newAccountData = {
		credentials: {
			password: request.body["userData"]["userPassword"],
		},
		data: {
			userEmail: request.body["userData"]["userEmail"],
			userName: request.body["userData"]["userName"],
		},
	};

	let faunaresponse = await faunaFuncs.createAccount(userInfo);

	console.log(faunaresponse);

	response.send(JSON.stringify({ faunaresponse: "signed up" }));
};

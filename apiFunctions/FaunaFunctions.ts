import faunadb from "faunadb";

interface newAccountData {
	credentials: { password: string };
	data: {
		userName: string;
		userEmail: string;
	};
}

interface loginData {
	userEmail: string;
	userPassword: string;
}

export class FaunaFunctions {
	constructor(private faunaSecret: string) {}

	private faunaClient = new faunadb.Client({
		secret: this.faunaSecret,
	});

	private faunaQuery = faunadb.query;

	createAccount = async (accountInfo: newAccountData) => {
		return await this.faunaClient
			.query(
				this.faunaQuery.Create(
					this.faunaQuery.Collection("useraccounts"),
					accountInfo
				)
			)
			.then((registeredAccount) => registeredAccount)
			.catch((faunaerror) => faunaerror);
	};

	login = async (loginInfo: loginData) =>
		await this.faunaClient
			.query(
				this.faunaQuery.Login(
					this.faunaQuery.Match(
						this.faunaQuery.Index("search_by_email"),
						loginInfo.userEmail
					),
					{
						password: loginInfo.userPassword,
					}
				)
			)
			.then((userDetails) => userDetails["secret"])
			.catch((faunaerror) => faunaerror["code"]);

	logout = async () =>
		await this.faunaClient.query(this.faunaQuery.Logout(true));
}

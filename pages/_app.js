import "../scss/main.scss";
import { useState } from "react";
import UserContext from "../Contexts/UserContext";

function MyApp({ Component, pageProps }) {
	let [user, setUser] = useState(() => ({
		userStatus: "NotLoggedIn",
		userAccessToken: "",
	}));

	return (
		<UserContext.Provider value={[user, setUser]}>
			<Component {...pageProps} />
		</UserContext.Provider>
	);
}

export default MyApp;

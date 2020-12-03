import "../scss/main.scss";
import { useState } from "react";
import UserContext from "../Contexts/UserContext";

function MyApp({ Component, pageProps }) {
	let [userStatus, setUserStatus] = useState(() => ({
		accountStatus: "notLoggedIn",
	}));

	return (
		<UserContext.Provider value={[userStatus, setUserStatus]}>
			<Component {...pageProps} />
		</UserContext.Provider>
	);
}

export default MyApp;

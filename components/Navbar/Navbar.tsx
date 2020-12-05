import axios from "axios";
import Link from "next/link";
import { useState, useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import UserAccount from "../UIComponents/UserAccount";
import UserLogin from "../UIComponents/UserLogin";
import navbarStyles from "./navbar.module.scss";

interface loginData {
	userEmail: string;
	userPassword: string;
}

const Navbar = ({ activePath }) => {
	let navbarRoutes = [{ routePath: "discover" }, { routePath: "twitch" }];

	let [{ accountStatus }, setAccountStatus] = useContext(UserContext);

	let [accountState, setAccountState] = useState("accountHidden");

	const loginUser = async (submitEvent, userCredentials: loginData) => {
		submitEvent.preventDefault();

		await axios
			.post("http://localhost:3000/api/faunadbapi/login", {
				userCredentials,
			})
			.then((apiresponse) => console.log(apiresponse))
			.catch((autherror) => console.log(autherror));
	};

	const signUpUser = async (submitEvent, userData) => {
		submitEvent.preventDefault();

		await axios
			.post("http://localhost:3000/api/faunadbapi/signup", {
				userData,
			})
			.then((apiresponse) => console.log(apiresponse))
			.catch((autherror) => console.log(autherror));
	};

	const toggleAccount = () => {
		accountStatus === "loggedIn"
			? setAccountState(
					() =>
						(accountState =
							accountState === "accountHidden"
								? "accountVisible"
								: "accountHidden")
			  )
			: setAccountState(
					() =>
						(accountState =
							accountState === "accountHidden"
								? "accountLogin"
								: "accountHidden")
			  );
	};

	return (
		<nav className={navbarStyles.navbar}>
			<Link href="/">
				<a className={navbarStyles.brand}>
					<span className="lab la-forumbee large-icon"></span>
					<p className={`${navbarStyles.brandText} ph`}>nextPlay</p>
				</a>
			</Link>
			<ul className={navbarStyles.navItems}>
				{navbarRoutes.map((navbarRoute) => (
					<li className={`${navbarStyles.navItem}`} key={navbarRoute.routePath}>
						<Link href={`/routes/${navbarRoute.routePath}`}>
							<a
								className={`pl ${navbarStyles.navLink} ${
									navbarRoute.routePath === activePath &&
									navbarStyles.activeLink
								}`}
							>
								{navbarRoute.routePath}
							</a>
						</Link>
					</li>
				))}
			</ul>

			<div className={navbarStyles.userActions}>
				<div
					className={navbarStyles.loggedInUser}
					onClick={() => toggleAccount()}
				>
					<img
						src="/images/games/fortnite.jpg"
						alt="jade"
						className={navbarStyles.activeUser}
					/>
				</div>
			</div>
			{accountStatus === "loggedIn" ? (
				<UserAccount
					userAccountState={accountState}
					toggleAccountVisibility={() => toggleAccount()}
				/>
			) : (
				<UserLogin
					userAccountState={accountState}
					toggleAccountVisibility={() => toggleAccount()}
					loginAction={(submitEvent, userCredentials: loginData) =>
						loginUser(submitEvent, userCredentials)
					}
					signupAction={(submitEvent, userData) =>
						signUpUser(submitEvent, userData)
					}
				/>
			)}
		</nav>
	);
};

export default Navbar;

import Link from "next/link";
import { useState, useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import UserAccount from "../UIComponents/UserAccount";
import navbarStyles from "./navbar.module.scss";

const Navbar = ({ activePath }) => {
	let navbarRoutes = [{ routePath: "discover" }, { routePath: "twitch" }];

	let [accountStatus, setAccountStatus] = useContext(UserContext);

	let [accountState, setAccountState] = useState("accountHidden");

	const toggleAccount = () => {
		setAccountState(
			() =>
				(accountState =
					accountState === "accountHidden" ? "accountVisible" : "accountHidden")
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
			<UserAccount
				userAccountState={accountState}
				toggleAccountVisibility={() => toggleAccount()}
			/>
		</nav>
	);
};

export default Navbar;

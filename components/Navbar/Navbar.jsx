import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import UserContext from "../../Store.js/UserContext";
import navbarStyles from "./navbar.module.scss";

const Navbar = ({ activePath }) => {
	let navbarRoutes = [
		{ routePath: "discover" },
		{ routePath: "news" },
		{ routePath: "account" },
	];

	Navbar.propTypes = {
		activePath: PropTypes.string,
	};

	let clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

	let accessToken = useRouter().asPath.slice(15, 45) || null;

	let [user, setUser] = useContext(UserContext);

	useEffect(() => {
		if (accessToken) {
			setUser(() => ({
				userStatus: "LoggedIn",
				userAccessToken: accessToken,
			}));
		}
	}, []);

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
						<Link href={`/views/${navbarRoute.routePath}`}>
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
				<div className={navbarStyles.notifications}>
					<span className="md-icon large-icon">notifications_none</span>
				</div>
				<div className={navbarStyles.loggedInUser}>
					<Link
						href={`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=http://nextplay.vercel.app/&scope=user:edit`}
					>
						<a>
							<img
								src="/images/jade.jpg"
								alt="jade"
								className={navbarStyles.activeUser}
								layout="fill"
							/>
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

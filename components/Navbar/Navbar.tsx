import Link from "next/link";
import navbarStyles from "./navbar.module.scss";

const Navbar = ({ activePath }) => {
	let navbarRoutes = [
		{ routePath: "discover" },
		{ routePath: "news" },
		{ routePath: "account" },
	];

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
				<div className={navbarStyles.notifications}>
					<button className="rl-icon-button">
						<span className="md-icon">notifications_none</span>
					</button>
				</div>
				<div className={navbarStyles.loggedInUser}>
					<img
						src="/images/jade.jpg"
						alt="jade"
						className={navbarStyles.activeUser}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

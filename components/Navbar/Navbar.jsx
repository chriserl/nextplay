import Link from "next/link";
import navbarStyles from "./navbar.module.scss";

const Navbar = (props) => {
	let navbarRoutes = [
		{ routePath: "discover" },
		{ routePath: "feed" },
		{ routePath: "games" },
		{ routePath: "chats" },
	];

	let activeLink;

	const setActivePath = () => {
		let currentRoute = navbarRoutes.filter(
			(route) => route["routePath"] === props.activePath
		);

		let { routePath } = currentRoute.length !== 0 && currentRoute[0];
		activeLink = routePath;
		console.log(activeLink);
	};

	setActivePath();

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
						<Link href={`views/${navbarRoute.routePath}`}>
							<a
								className={`pl ${
									navbarRoute.routePath === activeLink
										? navbarStyles.activeLink
										: navbarStyles.navLink
								}`}
							>
								{navbarRoute.routePath}
							</a>
						</Link>
					</li>
				))}
			</ul>

			<div className={navbarStyles.userActions}>
				<div className={navbarStyles.activeUsers}>
					<img
						src="/images/jade.jpg"
						alt="jade"
						className={navbarStyles.activeUsers}
						layout="fill"
					/>
				</div>
				<div className={navbarStyles.loggedInUser}>
					<img
						src="/images/jade.jpg"
						alt="jade"
						className={navbarStyles.activeUser}
						layout="fill"
					/>
				</div>
			</div>
		</nav>
	);
};

export { Navbar };

import Link from "next/link";
import homeStyles from "./home.module.scss";

const Home = () => {
	return (
		<div className={homeStyles.home}>
			<nav className={homeStyles.nav}>
				<Link href="./">
					<a className={`${homeStyles.brand} ph`}>nextPlay</a>
				</Link>
				<ul className={homeStyles.navItems}>
					<li className={homeStyles.navItem}>
						<Link href="./">
							<a className="nav-link pl">Discover</a>
						</Link>
					</li>
					<li className={homeStyles.navItem}>
						<Link href="./">
							<a className="nav-link pl">Feed</a>
						</Link>
					</li>
					<li className={homeStyles.navItem}>
						<Link href="./">
							<a className="nav-link pl">Games</a>
						</Link>
					</li>
					<li className={homeStyles.navItem}>
						<Link href="./">
							<a className="nav-link pl">Chats</a>
						</Link>
					</li>
				</ul>

				<div className={homeStyles.userActions}>
					<div className={homeStyles.activeUsers}>chats</div>
					<div className="logged-in-user">
						<span className="las la-user large-icon"></span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export { Home };

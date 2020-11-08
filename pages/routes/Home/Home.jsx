import Link from "next/link";
import homeStyles from "./home.module.scss";

const Home = () => {
	return (
		<div className={homeStyles.home}>
			<nav className={homeStyles.nav}>
				<Link href="./">
					<a className={homeStyles.brand}>
						<span className="lab la-forumbee large-icon"></span>
						<p className={`${homeStyles.brandText} ph`}>nextPlay</p>
					</a>
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
					<div className={homeStyles.activeUsers}>
						<img
							src="/images/jade.jpg"
							alt="jade"
							className={homeStyles.activeUsers}
							layout="fill"
						/>
					</div>
					<div className={homeStyles.loggedInUser}>
						<img
							src="/images/jade.jpg"
							alt="jade"
							className={homeStyles.activeUser}
							layout="fill"
						/>
					</div>
				</div>
			</nav>
		</div>
	);
};

export { Home };

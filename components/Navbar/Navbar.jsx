import React from "react";
import Link from "next/link";
import navbarStyles from "./navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={navbarStyles.navbar}>
			<Link href="./">
				<a className={navbarStyles.brand}>
					<span className="lab la-forumbee large-icon"></span>
					<p className={`${navbarStyles.brandText} ph`}>nextPlay</p>
				</a>
			</Link>
			<ul className={navbarStyles.navItems}>
				<li className={navbarStyles.navItem}>
					<Link href="./">
						<a className="nav-link pl">Discover</a>
					</Link>
				</li>
				<li className={navbarStyles.navItem}>
					<Link href="./">
						<a className="nav-link pl">Feed</a>
					</Link>
				</li>
				<li className={navbarStyles.navItem}>
					<Link href="./">
						<a className="nav-link pl">Games</a>
					</Link>
				</li>
				<li className={navbarStyles.navItem}>
					<Link href="./">
						<a className="nav-link pl">Chats</a>
					</Link>
				</li>
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

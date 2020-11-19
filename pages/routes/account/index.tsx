import { NextPage } from "next";
import Navbar from "../../../components/Navbar/Navbar";
import accountStyles from "./account.module.scss";

const Account: NextPage = () => {
	return (
		<div className={accountStyles.account}>
			<Navbar activePath={"account"} />
			<main className={accountStyles.mainArea}>
				<p className={`ph ${accountStyles.title}`}>Your nextPlay account</p>
				<div className={accountStyles.accountSummary}>
					<div className={accountStyles.imageContainer}>
						<p className="light-icon-button">
							<span className="md-icon small-icon">edit</span>
						</p>
						<img
							src="/images/jade.jpg"
							alt="jade"
							className={accountStyles.accountImage}
						/>
						<p className="light-icon-button">
							<span className="md-icon small-icon">edit</span>
						</p>
					</div>
					<div className={accountStyles.accountDetails}>
						<p className={`${accountStyles.accountName} plb`}>Unjaded Jade</p>
						<p className={`${accountStyles.accountLocation} psb`}>
							Berlin, Germany
						</p>
						<button className={`${accountStyles.editButton} primary-tab psb`}>
							Edit
						</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Account;

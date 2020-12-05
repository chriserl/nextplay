import { FunctionComponent } from "react";

const Account: FunctionComponent<{
	userAccountState: string;
	toggleAccountVisibility;
}> = ({ userAccountState, toggleAccountVisibility }) => {
	return (
		<div className={userAccountState}>
			<span
				onClick={() => toggleAccountVisibility()}
				className="material-icons secondary-tab close-icon"
			>
				close
			</span>
			<div className="image-container">
				<img
					src="/images/games/fortnite.jpg"
					alt="account"
					className="account-image"
				/>
			</div>
			<div className="card-body">
				<p className="account-name psb">Unjaded Jade</p>
				<p className="account-location px">Berlin, Germany</p>
				<div className="ctas">
					<button className="edit primary-button pxb">Edit</button>
					<button className="logout secondary-button px">Logout</button>
				</div>
			</div>
		</div>
	);
};

export default Account;

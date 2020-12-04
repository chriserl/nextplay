const UserLogin = ({ userAccountState, toggleAccountVisibility }) => {
	return (
		<div className={userAccountState}>
			<span
				onClick={() => toggleAccountVisibility()}
				className="md-icon secondary-tab close-icon"
			>
				close
			</span>

			<p className="ps form-title">Please enter your account details</p>
			<form className="login-form">
				<div className="search-control email-control">
					<input
						placeholder="Email"
						type="email"
						name="email"
						id="email"
						className="search-input"
						autoComplete="off"
						required
					/>
				</div>
				<div className="search-control password-control">
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						className="search-input"
						required
					/>
				</div>
				<button className="primary-button px form-submit" type="submit">
					Login
				</button>
			</form>

			<div className="sign-up">
				<p className="ps">No account?</p>{" "}
				<button className="secondary-button px sign-up-button">Sign up</button>
			</div>
		</div>
	);
};

export default UserLogin;

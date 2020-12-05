import { useState } from "react";

const UserLogin = ({
	userAccountState,
	toggleAccountVisibility,
	loginAction,
	signupAction,
}) => {
	let [modalState, setModalState] = useState(() => ({
		modalType: "logIn",
	}));

	let [loginData, setLoginData] = useState(() => ({
		userEmail: "",
		userPassword: "",
	}));

	let [signupData, setSignUpData] = useState(() => ({
		userName: "",
		userEmail: "",
		userPassword: "",
	}));

	const handleloginInput = (inputEvent, inputField) => {
		inputField === "password" &&
			setLoginData((previousState) => ({
				...previousState,
				userPassword: inputEvent.target.value,
			}));
		inputField === "email" &&
			setLoginData((previousState) => ({
				...previousState,
				userEmail: inputEvent.target.value,
			}));
	};

	const handleSignupInput = (inputEvent, inputField) => {
		inputField === "name" &&
			setSignUpData((previousState) => ({
				...previousState,
				userName: inputEvent.target.value,
			}));
		inputField === "password" &&
			setSignUpData((previousState) => ({
				...previousState,
				userPassword: inputEvent.target.value,
			}));
		inputField === "email" &&
			setSignUpData((previousState) => ({
				...previousState,
				userEmail: inputEvent.target.value,
			}));
	};

	const toggleModalType = () => {
		setModalState(() =>
			modalState.modalType === "logIn"
				? { ...modalState, modalType: "signUp" }
				: { ...modalState, modalType: "logIn" }
		);
	};

	return modalState.modalType === "logIn" ? (
		<div className={userAccountState}>
			<span
				onClick={() => toggleAccountVisibility()}
				className="md-icon secondary-tab close-icon"
			>
				close
			</span>

			<p className="ps form-title">
				Note: Having account does not affect your experience on this site
			</p>
			<form className="login-form">
				<div className="search-control email-control">
					<input
						value={loginData.userEmail}
						placeholder="Email"
						type="email"
						name="email"
						id="email"
						className="search-input"
						autoComplete="off"
						onChange={(event) => handleloginInput(event, "email")}
						required
					/>
				</div>
				<div className="search-control password-control">
					<input
						value={loginData.userPassword}
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						className="search-input"
						onChange={(event) => handleloginInput(event, "password")}
						required
					/>
				</div>
				<button
					onClick={(event) => loginAction(event, loginData)}
					className="primary-button px form-submit"
					type="submit"
				>
					Login
				</button>
			</form>

			<div className="sign-up">
				<p className="ps">No account?</p>
				<button
					onClick={() => toggleModalType()}
					className="secondary-button px sign-up-button"
				>
					Sign up
				</button>
			</div>
		</div>
	) : (
		<SignUpModal
			toggleModalType={() => toggleModalType()}
			userAccountState={userAccountState}
			toggleAccountVisibility={() => toggleAccountVisibility()}
			inputValues={signupData}
			handleInput={(event, eventType) => handleSignupInput(event, eventType)}
			signup={(event, userData) => signupAction(event, userData)}
		/>
	);
};

function SignUpModal({
	toggleModalType,
	userAccountState,
	toggleAccountVisibility,
	inputValues,
	handleInput,
	signup,
}) {
	return (
		<div className={userAccountState}>
			<span
				onClick={() => toggleAccountVisibility()}
				className="md-icon secondary-tab close-icon"
			>
				close
			</span>

			<p className="ps form-title">Fill the form to sign up</p>
			<form className="login-form">
				<div className="search-control name-control">
					<input
						value={inputValues.userName}
						placeholder="Name"
						type="text"
						name="name"
						id="name"
						className="search-input"
						autoComplete="off"
						onChange={(event) => handleInput(event, "name")}
						required
					/>
				</div>
				<div className="search-control email-control">
					<input
						value={inputValues.userEmail}
						placeholder="Email"
						type="email"
						name="email"
						id="email"
						className="search-input"
						autoComplete="off"
						onChange={(event) => handleInput(event, "email")}
						required
					/>
				</div>
				<div className="search-control password-control">
					<input
						value={inputValues.userPassword}
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						className="search-input"
						onChange={(event) => handleInput(event, "password")}
						required
					/>
				</div>
				<button
					onClick={(event) => signup(event, inputValues)}
					className="primary-button px form-submit"
					type="submit"
				>
					Create account
				</button>
			</form>

			<div className="sign-up">
				<p className="ps">Registered?</p>
				<button
					onClick={() => toggleModalType()}
					className="secondary-button px sign-up-button"
				>
					Login
				</button>
			</div>
		</div>
	);
}

export default UserLogin;

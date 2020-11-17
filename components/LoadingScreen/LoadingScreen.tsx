import loadingscreenStyles from "./loadingscreen.module.scss";

const LoadingScreen = () => {
	return (
		<div className={loadingscreenStyles.loadingScreen}>
			<div className={loadingscreenStyles.loading}>
				<div className={loadingscreenStyles.dot}></div>
				<div className={loadingscreenStyles.dot}></div>
				<div className={loadingscreenStyles.dot}></div>
				<div className={loadingscreenStyles.dot}></div>
				<div className={loadingscreenStyles.dot}></div>
			</div>
		</div>
	);
};

export default LoadingScreen;

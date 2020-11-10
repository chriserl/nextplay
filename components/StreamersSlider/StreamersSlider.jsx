import streamerssliderStyles from "./streamersslider.module.scss";

const streamersSlider = ({ children }) => {
	let streamers = [
		"ninja",
		"davelee",
		"noisybutters",
		"jake",
		"yin",
		"tom",
		"oscar",
	];
	return (
		<div className={streamerssliderStyles.streamersSlider}>
			<div className={streamerssliderStyles.sliderContainer}>
				<ul className={streamerssliderStyles.sliderItems}>
					{streamers.map((streamer) => (
						<li className={streamerssliderStyles.sliderItem} key={streamer}>
							{children}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default streamersSlider;

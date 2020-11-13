import streamerssliderStyles from "./streamersslider.module.scss";

const streamersSlider = ({ sliderTitle, sliderContent, sliderComponent }) => {
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
			<p className={`${streamerssliderStyles.sliderTitle} ph`}>{sliderTitle}</p>
			<div className={streamerssliderStyles.sliderContainer}>
				<ul className={streamerssliderStyles.sliderItems}>
					{sliderContent.map((sliderData) => (
						<li className={streamerssliderStyles.sliderItem}>
							{sliderComponent(sliderData)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default streamersSlider;

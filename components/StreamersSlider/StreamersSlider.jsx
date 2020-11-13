import streamerssliderStyles from "./streamersslider.module.scss";

const streamersSlider = ({ sliderTitle, sliderContent, sliderComponent }) => {
	return (
		<div className={streamerssliderStyles.streamersSlider}>
			<p className={`${streamerssliderStyles.sliderTitle} ph`}>{sliderTitle}</p>
			<div className={streamerssliderStyles.sliderContainer}>
				<ul className={streamerssliderStyles.sliderItems}>
					{sliderContent.map((sliderData) => (
						<li
							className={streamerssliderStyles.sliderItem}
							key={sliderData.channel}
						>
							{sliderComponent(sliderData)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default streamersSlider;

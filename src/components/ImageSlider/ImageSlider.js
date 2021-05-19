import React from "react";
import classes from "./ImageSlider.module.css";

const imageSlider = (props) => {
	let id = -1;
	return props.imageSlide.length > 0 ? (
		<div className={classes.SlideWrapper}>
			<div className={classes.Slider}>
				{props.imageSlide.map((image) => {
					id++;
					return (
						<img
							key={id}
							className={classes.Thumbnail}
							src={image}
							alt="Selected Img"
						/>
					);
				})}
			</div>
		</div>
	) : null;
};

export default imageSlider;

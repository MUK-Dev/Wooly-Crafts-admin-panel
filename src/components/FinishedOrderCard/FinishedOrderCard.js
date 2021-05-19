import React from "react";
import classes from "./FinishedOrderCard.module.css";

const productCard = (props) => (
	<div
		className={["card", classes.FadeIn].join(" ")}
		style={{ backgroundColor: "#163138" }}
	>
		<div className="card-content">
			<span className="card-title">Card Title</span>
		</div>
	</div>
);

export default productCard;

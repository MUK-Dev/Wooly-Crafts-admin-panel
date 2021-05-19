import React from "react";
import classes from "./HomeCard.module.css";
import { Link } from "react-router-dom";

const homeCard = (props) => (
	<Link to={props.path}>
		<div
			className={["card, z-depth-0", classes.HomeCard].join(" ")}
			style={{ backgroundColor: "#163138" }}
		>
			<div className={classes.CardBody}>
				<h5>{props.title}</h5>
				<p className="left-align">{props.children}</p>
				<p className="right-align">{props.extra}</p>
			</div>
		</div>
	</Link>
);

export default homeCard;

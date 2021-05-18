import React from "react";
import { NavLink } from "react-router-dom";

const navItem = (props) => (
	<li>
		<NavLink to={props.path} style={{ color: "#0d2229", fontWeight: "700" }}>
			{props.children}
		</NavLink>
	</li>
);

export default navItem;

import React from "react";

const contactFormSubmission = (props) => (
	<li
		className="collection-item avatar z-depth-1"
		style={{ margin: "20px", border: "none", backgroundColor: "#163138" }}
	>
		<i className="material-icons circle red">person</i>
		<h5 className="title left-align">By: {props.name}</h5>
		<p className="left-align">{props.email}</p>
		<p className="left-align">{props.date}</p>
		<hr />
		<p className="left-align">{props.message}</p>
	</li>
);
export default contactFormSubmission;

import React from "react";

const user = (props) => (
	<div className="card" style={{ backgroundColor: "#163138" }}>
		<div className="card-image center-align">
			<i className="material-icons">person</i>
		</div>
		<div className="card-content">
			<p>
				<b>Name: </b>
				{props.name}
			</p>

			<p>
				<b>Email: </b>
				{props.email}
			</p>
			<p>
				<b>Contact No: </b>
				{props.phone}
			</p>
			<p>
				<b>Registered On: </b>
				{props.date}
			</p>
		</div>
	</div>
);

export default user;

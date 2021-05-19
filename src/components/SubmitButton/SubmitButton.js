import React from "react";

const submitButton = (props) => (
	<button
		className="waves-effect waves-purple btn"
		style={{ margin: "5px", backgroundColor: "#ff8882", marginBottom: "10px" }}
	>
		{props.children}
	</button>
);

export default submitButton;

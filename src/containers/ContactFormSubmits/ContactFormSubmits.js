import React, { Component } from "react";
import classes from "./ContactFormSubmits.module.css";
import ContactFormSubmission from "../../components/ContactFormSubmission/ContactFormSubmission";

class ContactFormSubmits extends Component {
	render() {
		return (
			<div className={classes.ContactFormSubmits}>
				<div className="container">
					<ul className="collection" style={{ border: "none", marginTop: "0" }}>
						<ContactFormSubmission
							name="M Usman Khilji"
							email="manian1221@gmail.com"
							date="19-05-2021"
							message="The message will be here"
						/>
					</ul>
				</div>
			</div>
		);
	}
}

export default ContactFormSubmits;

import React, { Component } from "react";
import classes from "./ContactFormSubmits.module.css";
import ContactFormSubmission from "../../components/ContactFormSubmission/ContactFormSubmission";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "../../axios";
import SmallHeading from "../../components/SmallHeading/SmallHeading";

class ContactFormSubmits extends Component {
	state = {
		submissions: [],
		showSpinner: false,
		response: null,
	};

	componentDidMount() {
		this.setState({ showSpinner: true });
		axios
			.get("/messages")
			.then((res) => {
				this.setState({ submissions: res.data, showSpinner: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ response: "Something Went Wrong", showSpinner: false });
			});
	}

	render() {
		return (
			<div className={classes.ContactFormSubmits}>
				{this.state.showSpinner ? (
					<LoadingSpinner />
				) : this.state.response ? (
					<SmallHeading>{this.state.response}</SmallHeading>
				) : (
					<div className="container">
						<ul
							className="collection"
							style={{ border: "none", marginTop: "0" }}
						>
							{this.state.submissions.map((submission) => {
								const date = new Date(submission.createdAt);
								return (
									<div key={submission._id}>
										<ContactFormSubmission
											name={submission.name}
											email={submission.email}
											date={`${date.getDate()}-${
												date.getMonth() + 1
											}-${date.getFullYear()}`}
											message={submission.message}
										/>
									</div>
								);
							})}
						</ul>
					</div>
				)}
			</div>
		);
	}
}

export default ContactFormSubmits;

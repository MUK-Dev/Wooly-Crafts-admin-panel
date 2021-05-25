import React, { Component } from "react";
import classes from "./AllUsers.module.css";
import Row from "../../components/Row/Row";
import TwoColumnOnSmall from "../../components/TwoColumnOnSmall/TwoColumnOnSmall";
import User from "../../components/User/User";
import axios from "../../axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SmallHeading from "../../components/SmallHeading/SmallHeading";

class AllUsers extends Component {
	state = {
		users: [],
		showSpinner: false,
	};

	componentDidMount() {
		this.setState({ showSpinner: true });
		axios
			.get("/users")
			.then((res) => {
				this.setState({ users: res.data, showSpinner: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ showSpinner: false });
			});
	}

	render() {
		return (
			<div className={classes.AllUsers}>
				{this.state.showSpinner ? (
					<LoadingSpinner />
				) : this.state.users.length > 0 ? (
					<div>
						<p className="center-align" style={{ marginTop: "0" }}>
							Total Users Registered: {this.state.users.length}
						</p>
						<Row>
							{this.state.users.reverse().map((user) => {
								const date = new Date(user.createdAt);
								return (
									<div key={user._id}>
										<TwoColumnOnSmall>
											<User
												name={user.name}
												email={user.email}
												phone={user.phone}
												date={`${date.getDate()}-${
													date.getMonth() + 1
												}-${date.getFullYear()}`}
											/>
										</TwoColumnOnSmall>
									</div>
								);
							})}
						</Row>
					</div>
				) : (
					<SmallHeading>No Registered Users Yet</SmallHeading>
				)}
			</div>
		);
	}
}

export default AllUsers;

import React, { Component } from "react";
import classes from "./AllUsers.module.css";
import Row from "../../components/Row/Row";
import TwoColumnOnSmall from "../../components/TwoColumnOnSmall/TwoColumnOnSmall";
import User from "../../components/User/User";

class AllUsers extends Component {
	render() {
		return (
			<div className={classes.AllUsers}>
				<p className="center-align" style={{ marginTop: "0" }}>
					Total Users Registered: 0
				</p>
				<Row>
					<TwoColumnOnSmall>
						<User
							name="M Usman Khilji"
							email="manian1221@gmail.com"
							phone="03313933344"
						/>
					</TwoColumnOnSmall>
					<TwoColumnOnSmall>
						<User
							name="M Usman Khilji"
							email="manian1221@gmail.com"
							phone="03313933344"
						/>
					</TwoColumnOnSmall>
				</Row>
			</div>
		);
	}
}

export default AllUsers;

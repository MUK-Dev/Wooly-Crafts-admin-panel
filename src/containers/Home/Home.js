import React, { Component } from "react";
import classes from "./Home.module.css";
import Row from "../../components/Row/Row";
import TwoColumnOnSmall from "../../components/TwoColumnOnSmall/TwoColumnOnSmall";
import HomeCard from "../../components/HomeCard/HomeCard";
import HomeCardBig from "../../components/HomeCardBig/HomeCardBig";

class Home extends Component {
	render() {
		return (
			<div className={classes.Home}>
				<Row>
					<TwoColumnOnSmall>
						<HomeCard title="New Product">
							The new Product will be released and will be available to the
							public.
						</HomeCard>
					</TwoColumnOnSmall>
					<TwoColumnOnSmall>
						<HomeCard title="Contact Us Form" extra={"Total Messages: " + 0}>
							The messages submitted in the contact form on the user website
							will be here
						</HomeCard>
					</TwoColumnOnSmall>
					<TwoColumnOnSmall>
						<HomeCard
							title="Finished Orders"
							extra={"Finished Orders: " + 0}
						></HomeCard>
					</TwoColumnOnSmall>
					<TwoColumnOnSmall>
						<HomeCard title="Edit Products" extra={"Total Products: " + 0}>
							Edit previos product.
						</HomeCard>
					</TwoColumnOnSmall>
				</Row>
				<HomeCardBig
					title="Click here for all Orders"
					extra={"Total Orders: " + 0}
				></HomeCardBig>
				<HomeCardBig
					title="All Registered Users"
					extra={"Total Users: " + 0}
				></HomeCardBig>
			</div>
		);
	}
}

export default Home;

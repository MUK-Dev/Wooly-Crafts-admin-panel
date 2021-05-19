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
						<HomeCard path="/newProduct" title="New Product">
							The new Product will be released and will be available to the
							public.
						</HomeCard>
					</TwoColumnOnSmall>
					<TwoColumnOnSmall>
						<HomeCard path="/contactFormSubmits" title="Contact Us Form">
							The messages submitted in the contact form on the user website
							will be here
						</HomeCard>
					</TwoColumnOnSmall>
					<TwoColumnOnSmall>
						<HomeCard path="/finishedOrders" title="Finished Orders"></HomeCard>
					</TwoColumnOnSmall>
					<TwoColumnOnSmall>
						<HomeCard path="/editProducts" title="Edit Products">
							Edit previos product.
						</HomeCard>
					</TwoColumnOnSmall>
				</Row>
				<HomeCardBig
					path="/orders"
					title="Click here for all Orders"
				></HomeCardBig>
				<HomeCardBig
					path="/allUsers"
					title="All Registered Users"
				></HomeCardBig>
			</div>
		);
	}
}

export default Home;

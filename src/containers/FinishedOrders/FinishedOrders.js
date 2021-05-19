import React, { Component } from "react";
import classes from "./FinishedOrders.module.css";
import Row from "../../components/Row/Row";
import TwoColumnsOnSmall from "../../components/TwoColumnOnSmall/TwoColumnOnSmall";
import ProductCard from "../../components/FinishedOrderCard/FinishedOrderCard";
import SmallHeading from "../../components/SmallHeading/SmallHeading";

class FinishedOrders extends Component {
	render() {
		return (
			<div className={classes.FinishedOrders}>
				<SmallHeading>Finished Orders</SmallHeading>
				<p className="center-align">Total Finished Orders: 0</p>
				<Row>
					<TwoColumnsOnSmall>
						<ProductCard />
					</TwoColumnsOnSmall>
				</Row>
			</div>
		);
	}
}

export default FinishedOrders;

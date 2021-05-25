import React, { Component } from "react";
import classes from "./FinishedOrders.module.css";
import Order from "../../components/Order/Order";
import axios from "../../axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

class ContactFormSubmits extends Component {
	state = {
		orders: [],
		showSpinner: false,
	};

	componentDidMount() {
		this.setState({ showSpinner: true });
		axios
			.get("/finishedOrders")
			.then((res) => {
				this.setState({ orders: res.data, showSpinner: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ showSpinner: false });
			});
	}

	render() {
		return (
			<div className={classes.FinishedOrders}>
				<p className="center-align" style={{ marginTop: "0" }}>
					Total Finished Orders: {this.state.orders.length}
				</p>
				{this.state.showSpinner ? (
					<LoadingSpinner />
				) : (
					<div className="container">
						<ul
							className="collection"
							style={{ border: "none", marginTop: "0" }}
						>
							{this.state.orders.reverse().map((order) => {
								const date = new Date(order.createdAt);
								return (
									<div key={order._id}>
										<Order
											name={order.customerName}
											email={order.customerEmail}
											date={`${date.getDate()}-${
												date.getMonth() + 1
											}-${date.getFullYear()}`}
											address={order.customerAddress}
											phone={order.customerPhone}
											amount={order.totalBill}
											paymentMethod={order.paymentMethod}
											orderedProducts={order.order}
											completed={order.finished}
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

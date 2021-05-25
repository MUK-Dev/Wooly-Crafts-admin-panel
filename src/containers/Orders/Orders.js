import React, { Component } from "react";
import classes from "./Orders.module.css";
import Order from "../../components/Order/Order";
import axios from "../../axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SmallHeading from "../../components/SmallHeading/SmallHeading";

class ContactFormSubmits extends Component {
	state = {
		orders: [],
		responseMessage: null,
		showSpinner: false,
		showItemSpinner: false,
	};

	componentDidMount() {
		this.setState({ showSpinner: true });
		axios
			.get("/orders")
			.then((res) => {
				this.setState({ orders: res.data, showSpinner: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ showSpinner: false });
			});
	}

	markAsCompleteHandler = (productId) => {
		this.setState({ showItemSpinner: true });
		axios
			.patch("/orders/" + productId)
			.then((res) => {
				console.log(res);
				this.setState({ responseMessage: res.data, showItemSpinner: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ showItemSpinner: false });
			});
	};

	render() {
		return (
			<div className={classes.Orders}>
				<p className="center-align" style={{ marginTop: "0" }}>
					Total Un-Finished Orders: {this.state.orders.length}
				</p>
				{this.state.responseMessage ? (
					<SmallHeading>{this.state.responseMessage}</SmallHeading>
				) : null}
				{this.state.showSpinner ? (
					<LoadingSpinner />
				) : this.state.orders.length > 0 ? (
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
											loading={this.state.showItemSpinner}
											complete={() => this.markAsCompleteHandler(order._id)}
										/>
									</div>
								);
							})}
						</ul>
					</div>
				) : (
					<SmallHeading>No Order Yet</SmallHeading>
				)}
			</div>
		);
	}
}

export default ContactFormSubmits;

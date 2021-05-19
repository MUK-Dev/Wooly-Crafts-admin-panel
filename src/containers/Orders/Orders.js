import React, { Component } from "react";
import classes from "./Orders.module.css";
import Order from "../../components/Order/Order";

class ContactFormSubmits extends Component {
	render() {
		return (
			<div className={classes.Orders}>
				<p className="center-align" style={{ marginTop: "0" }}>
					Total Finished Orders: 0
				</p>
				<div className="container">
					<ul className="collection" style={{ border: "none", marginTop: "0" }}>
						<Order
							name="M Usman Khilji"
							email="manian1221@gmail.com"
							date="19-05-2021"
							address="House no 21, Faisal Street no 6, Gulgasht Colony, Multan"
							phone="03313933344"
							message="The message will be here"
							amount="10000"
							paymentMethod="Cash On Delivery"
						/>
					</ul>
				</div>
			</div>
		);
	}
}

export default ContactFormSubmits;

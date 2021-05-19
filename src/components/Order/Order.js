import React from "react";
import OrderedProduct from "../OrderedProduct/OrderedProduct";
import Row from "../Row/Row";
import TwoColumnOnLarge from "../TwoColumnsOnLarge/TwoColumnsOnLarge";

const order = (props) => (
	<li
		className="collection-item avatar z-depth-1"
		style={{ margin: "20px", border: "none", backgroundColor: "#163138" }}
	>
		<Row>
			<TwoColumnOnLarge>
				<i className="material-icons circle red">person</i>
				<h5 className="title left-align">
					<b>By:</b> {props.name}
				</h5>
				<br />
				<p className="left-align">
					<b>Email:</b> {props.email}
				</p>
				<br />
				<p className="left-align">
					<b>Order Date:</b> {props.date}
				</p>
				<br />
				<p className="left-align">
					<b>Address:</b> {props.address}
				</p>
				<br />
				<p className="left-align">
					<b>Contact No.:</b> {props.phone}
				</p>
				<br />
				<p className="left-align">
					<b>RS:</b> {props.amount}
				</p>
				<br />
				<p className="left-align">
					<b>Payment Method:</b> {props.paymentMethod}
				</p>
			</TwoColumnOnLarge>
			<TwoColumnOnLarge>
				<OrderedProduct />
				<OrderedProduct />
			</TwoColumnOnLarge>
		</Row>
	</li>
);
export default order;

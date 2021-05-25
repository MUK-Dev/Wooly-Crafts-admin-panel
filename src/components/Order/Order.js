import React from "react";
import OrderedProduct from "../OrderedProduct/OrderedProduct";
import Row from "../Row/Row";
import TwoColumnOnLarge from "../TwoColumnsOnLarge/TwoColumnsOnLarge";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const order = (props) => {
	return (
		<li
			key={props.uniqueKey}
			className="collection-item avatar z-depth-1"
			style={{ margin: "20px", border: "none", backgroundColor: "#163138" }}
		>
			<Row>
				<TwoColumnOnLarge>
					<i className="material-icons circle red">shopping_cart</i>
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
						<b>Completed</b> {props.completed ? "Yes" : "No"}
					</p>
					<br />
					<p className="left-align">
						<b>Payment Method:</b> {props.paymentMethod}
					</p>
				</TwoColumnOnLarge>
				<TwoColumnOnLarge>
					{props.loading ? (
						<LoadingSpinner />
					) : (
						props.orderedProducts.map((product) => {
							return (
								<div key={product._id}>
									<OrderedProduct
										productName={product.productName}
										productPrice={product.productPrice}
									/>
								</div>
							);
						})
					)}
				</TwoColumnOnLarge>
			</Row>
			{props.completed ? null : (
				<button
					className="waves-effect waves-light btn"
					onClick={props.complete}
					style={{ backgroundColor: "#ff8882" }}
				>
					Mark As Completed
				</button>
			)}
		</li>
	);
};
export default order;

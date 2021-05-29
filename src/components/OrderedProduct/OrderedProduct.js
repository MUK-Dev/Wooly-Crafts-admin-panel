import React from "react";
import Row from "../Row/Row";
import classes from "./OrderedProduct.module.css";

const cartItem = (props) => (
	<div className={classes.Order}>
		<Row>
			<div className="col s3">
				<img src={props.productImage} alt="Product" className={classes.Image} />
			</div>
			<div className="col s9">
				<div className="col">
					<p>
						<b>Item Name: </b>
						{props.productName}
					</p>
					<p>
						<b>Price </b>
						Rs: {props.productPrice}
					</p>
				</div>
			</div>
		</Row>
	</div>
);

export default cartItem;

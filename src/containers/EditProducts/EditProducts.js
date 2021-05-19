import React, { Component } from "react";
import classes from "./EditProducts.module.css";
import Row from "../../components/Row/Row";
import TwoColumnOnSmall from "../../components/TwoColumnOnSmall/TwoColumnOnSmall";
import ProductCard from "../../components/ProductCard/ProductCard";

class EditProducts extends Component {
	render() {
		return (
			<div className={classes.EditProduct}>
				<Row>
					<TwoColumnOnSmall>
						<ProductCard />
					</TwoColumnOnSmall>
				</Row>
			</div>
		);
	}
}

export default EditProducts;

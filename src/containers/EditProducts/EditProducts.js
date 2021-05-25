import React, { Component } from "react";
import classes from "./EditProducts.module.css";
import Row from "../../components/Row/Row";
import TwoColumnOnSmall from "../../components/TwoColumnOnSmall/TwoColumnOnSmall";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "../../axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SmallHeading from "../../components/SmallHeading/SmallHeading";

class EditProducts extends Component {
	state = {
		products: [],
		showSpinner: false,
		responseMessage: null,
	};

	componentDidMount() {
		this.setState({ showSpinner: true });
		axios
			.get("/products")
			.then((res) => {
				this.setState({ products: res.data, showSpinner: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ showSpinner: false });
			});
	}

	markSoldHandler = (productId) => {
		this.setState({ showSpinner: true });
		axios
			.patch("/products/" + productId)
			.then((res) => {
				this.setState({ responseMessage: res.data, showSpinner: false });
				setTimeout(() => {
					this.setState({ responseMessage: null });
				}, 4000);
			})
			.catch((err) => {
				console.log(err);
				this.setState({ showSpinner: false });
			});
	};

	render() {
		return (
			<div className={classes.EditProduct}>
				{this.state.showSpinner ? (
					<LoadingSpinner />
				) : this.state.products.length > 0 ? (
					<div>
						{this.state.responseMessage ? (
							<SmallHeading>{this.state.responseMessage}</SmallHeading>
						) : null}
						<p className="center-align" style={{ marginTop: "0" }}>
							Total Products: {this.state.products.length}
						</p>

						<Row>
							{this.state.products.reverse().map((product) => {
								return (
									<div key={product._id}>
										<TwoColumnOnSmall>
											<ProductCard
												name={product.name}
												sold={product.soldOut}
												price={product.price}
												image={product.images[0]}
												changeAvailablility={() =>
													this.markSoldHandler(product._id)
												}
												state={this.state.responseMessage}
											/>
										</TwoColumnOnSmall>
									</div>
								);
							})}
						</Row>
					</div>
				) : (
					<SmallHeading>No Products Yet</SmallHeading>
				)}
			</div>
		);
	}
}

export default EditProducts;

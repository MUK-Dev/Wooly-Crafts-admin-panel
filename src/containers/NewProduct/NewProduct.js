import React, { Component } from "react";
import classes from "./NewProduct.module.css";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import axios from "../../axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SmallHeading from "../../components/SmallHeading/SmallHeading";
import SizedBox from "../../components/SizedBox/SizedBox";

class NewProduct extends Component {
	state = {
		productForm: {
			productName: {
				elementType: "input",
				label: "Product Name",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			productPrice: {
				elementType: "input",
				label: "Product Price e.g. 2500, 2000 without Rs",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			description: {
				elementType: "textarea",
				label: "Product Description",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
		},
		images: [],
		imagesForBackEnd: [],
		responseMessage: null,
		showSpinner: false,
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({ showSpinner: true });
		const description = this.state.productForm.description.value;
		const name = this.state.productForm.productName.value;
		const price = this.state.productForm.productPrice.value;
		const images = this.state.imagesForBackEnd;
		if (name !== "" && description !== "" && images !== [] && price !== "") {
			const formData = new FormData();
			formData.append("name", name);
			formData.append("price", price);
			formData.append("description", description);
			images.map((image) => {
				return formData.append("images", image);
			});
			axios
				.post("/products", formData)
				.then((res) => {
					console.log(res);
					this.setState({ responseMessage: res.data, showSpinner: false });
				})
				.catch((err) => {
					console.log(err);
					this.setState({ showSpinner: false });
				});
		}
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = { ...this.state.productForm };
		const updatedElement = { ...updatedForm[inputIdentifier] };
		updatedElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedElement;
		this.setState({ productForm: updatedForm });
	};

	fileSelectedHandler = (event) => {
		if (event.target.files) {
			this.setState({ showSpinner: true });
			const fileReader = new FileReader();
			const newImagesForBackend = [...this.state.imagesForBackEnd];
			newImagesForBackend.push(event.target.files[0]);
			this.setState({ imagesForBackEnd: newImagesForBackend });
			fileReader.onload = () => {
				const newImagesArray = [...this.state.images];
				newImagesArray.push(fileReader.result);
				this.setState({ images: newImagesArray, showSpinner: false });
			};
			fileReader.readAsDataURL(event.target.files[0]);
		}
	};

	render() {
		const formElementArry = [];
		for (let key in this.state.productForm) {
			formElementArry.push({
				id: key,
				config: this.state.productForm[key],
			});
		}

		return (
			<div className={classes.NewProduct}>
				<Row>
					{this.state.responseMessage ? (
						<div>
							<SizedBox width="0" height="20px" />
							<SmallHeading>{this.state.responseMessage}</SmallHeading>
							<SizedBox width="0" height="20px" />
						</div>
					) : null}
					<TwoColumnsOnLarge>
						<div className={classes.ImageSection}>
							<Input
								key="filePicker"
								elementType="file"
								label="Chose Images"
								selectedFiles={this.fileSelectedHandler}
							/>
							{this.state.showSpinner ? (
								<LoadingSpinner />
							) : (
								<ImageSlider imageSlide={this.state.images} />
							)}
						</div>
					</TwoColumnsOnLarge>
					<TwoColumnsOnLarge>
						<form onSubmit={this.submitHandler}>
							{formElementArry.map((element) => {
								return (
									<Input
										key={element.id}
										elementType={element.config.elementType}
										elementConfig={element.config.elementConfig}
										value={element.config.value}
										label={element.config.label}
										changed={(event) =>
											this.inputChangedHandler(event, element.id)
										}
									/>
								);
							})}
							<SubmitButton>Release New Product</SubmitButton>
						</form>
					</TwoColumnsOnLarge>
				</Row>
			</div>
		);
	}
}

export default NewProduct;

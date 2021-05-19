import React, { Component } from "react";
import classes from "./NewProduct.module.css";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

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
	};

	submitHandler = (event) => {
		event.preventDefault();
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
			const fileReader = new FileReader();
			fileReader.onload = () => {
				const newImagesArray = [...this.state.images];
				newImagesArray.push(fileReader.result);
				this.setState({ images: newImagesArray });
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
					<TwoColumnsOnLarge>
						<div className={classes.ImageSection}>
							<Input
								key="filePicker"
								elementType="file"
								label="Chose Images"
								selectedFiles={this.fileSelectedHandler}
							/>
							<ImageSlider imageSlide={this.state.images} />
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

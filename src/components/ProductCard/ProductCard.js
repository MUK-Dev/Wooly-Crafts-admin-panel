import React from "react";
import classes from "./ProductCard.module.css";

const productCard = (props) => (
	<div
		className={["card", classes.FadeIn].join(" ")}
		style={{ backgroundColor: "#163138" }}
	>
		<div className="card-image">
			<img
				src={`http://192.168.18.44:5000/${props.image}`}
				alt="Product"
				className={classes.Image}
			/>
			<button
				onClick={props.deleteProduct}
				className="btn-floating halfway-fab waves-effect waves-purple"
				style={{ backgroundColor: "#ff8882" }}
			>
				<i className="material-icons">delete_forever</i>
			</button>
		</div>
		<div className="card-content">
			<span className="card-title">{props.name}</span>
			<h6>Price Rs: {props.price}</h6>
			<h5>
				Sold:{" "}
				{props.sold ? (
					<span style={{ color: "red" }}>Yes</span>
				) : (
					<span style={{ color: "green" }}>No</span>
				)}
			</h5>
		</div>
		<div className="card-action">
			{props.sold ? (
				<button
					className="waves-effect waves-light btn"
					onClick={props.changeAvailablility}
					style={{ backgroundColor: "#ff8882" }}
				>
					Mark As Available
				</button>
			) : (
				<button
					className="waves-effect waves-light btn"
					onClick={props.changeAvailablility}
					style={{ backgroundColor: "#ff8882" }}
				>
					Mark As Sold
				</button>
			)}
		</div>
	</div>
);

export default productCard;

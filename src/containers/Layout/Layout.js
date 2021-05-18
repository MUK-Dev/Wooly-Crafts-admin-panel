import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

class Layout extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className={classes.LayoutBody}>
					<main>{this.props.children}</main>
				</div>
			</div>
		);
	}
}

export default Layout;

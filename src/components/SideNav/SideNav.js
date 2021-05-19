import React from "react";
import NavItem from "./NavItem/NavItem";
import SizedBox from "../SizedBox/SizedBox";
import wool from "../../assets/wool.svg";

const sideNav = (props) => (
	<ul
		className="sidenav sidenav-close"
		id="mobile-demo"
		style={{ backgroundColor: "#ff8882" }}
	>
		<SizedBox width="0" height="30px" />
		<img
			src={wool}
			alt="Wool Logo"
			className="center-align"
			style={{ width: "100%", height: "70px" }}
		/>
		<NavItem path="/">
			<p>Home</p>
		</NavItem>
		<NavItem path="/newProduct">
			<p>New Product</p>
		</NavItem>
		<NavItem path="/contactFormSubmits">
			<p>Contact Submission</p>
		</NavItem>
		<NavItem path="/finishedOrders">
			<p>Finished Orders</p>
		</NavItem>
		<NavItem path="/editProducts">
			<p>Edit Products</p>
		</NavItem>
		<NavItem path="/orders">
			<p>Orders</p>
		</NavItem>
		<NavItem path="/allUsers">
			<p>All Registered Users</p>
		</NavItem>
	</ul>
);

export default sideNav;

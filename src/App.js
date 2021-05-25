import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import { Route } from "react-router";
import Home from "./containers/Home/Home";
import NewProduct from "./containers/NewProduct/NewProduct";
import ContactFormSubmits from "./containers/ContactFormSubmits/ContactFormSubmits";
import FinishedOrders from "./containers/FinishedOrders/FinishedOrders";
import EditProducts from "./containers/EditProducts/EditProducts";
import Orders from "./containers/Orders/Orders";
import AllUsers from "./containers/AllUsers/AllUsers";

class App extends Component {
	render() {
		return (
			<div className="center-align">
				<Layout>
					<Route path="/" exact component={Home} />
					<Route path="/newProduct" exact component={NewProduct} />
					<Route
						path="/contactFormSubmits"
						exact
						component={ContactFormSubmits}
					/>
					<Route path="/finishedOrders" exact component={FinishedOrders} />
					<Route path="/editProducts" exact component={EditProducts} />
					<Route path="/orders" exact component={Orders} />
					<Route path="/allUsers" exact component={AllUsers} />
				</Layout>
			</div>
		);
	}
}

export default App;

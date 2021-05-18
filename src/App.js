import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import { Route } from "react-router";
import Home from "./containers/Home/Home";

class App extends Component {
	render() {
		return (
			<div className="center-align">
				<Layout>
					<Route path="/" exact component={Home} />
				</Layout>
			</div>
		);
	}
}

export default App;

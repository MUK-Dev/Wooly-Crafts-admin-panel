/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min";
import Navlogo from "../../components/NavLogo/Navlogo";
import SideNav from "../../components/SideNav/SideNav";
import SideNavTrigger from "../../components/SideNavTrigger/SideNavTrigger";

class Navbar extends Component {
	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function () {
			var elems = document.querySelectorAll(".sidenav");
			// eslint-disable-next-line no-unused-vars
			var instances = M.Sidenav.init(elems, {});
		});
	}

	render() {
		return (
			<div>
				<nav style={{ boxShadow: "none" }}>
					<div
						className="nav-wrapper z-depth-0"
						style={{ backgroundColor: "#194350" }}
					>
						<SideNavTrigger />
						<Navlogo />
					</div>
				</nav>
				<SideNav />
			</div>
		);
	}
}

export default Navbar;

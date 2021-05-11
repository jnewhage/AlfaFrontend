import React, { Component } from 'react';
import '../assets/css/alfa_style.css';
import logo from "../assets/images/logo.png";

class Header extends Component {
	constructor() {
		super();
		this.state = {

		};
	}

	render() {
		return (
			<div className="header">
				<div className="name"> John's Alfa Parts </div>
				<div className="topnav">
					<img src={logo} alt="../assets/images/logo.png" className="logo" />
					<div className="topnav_buttons">
						<a href="index.js"><i className="fa fa-signup"></i> Log out</a>
						<a href="cart.js"><i className="fa fa-map"></i> Cart</a>
						<a href="mechanics.js"><i className="fa fa-info-circle"></i> Repair Shops & Mechanics</a>
						<a href="alfa_parts.js"><i className="fa fa-map"></i> Parts</a>
						<a href="home.js"><i className="fa fa-home"></i> Home</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
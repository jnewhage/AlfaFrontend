import React, { Component } from 'react';
import '../assets/css/alfa_style.css';
import logo from "../assets/images/logo.png";

class Login extends Component {
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
						<a href="signup.js"><i className="fa fa-signup"></i>Signup</a>
						<a href="login.js"><i className="fa fa-login"></i> Log in</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;
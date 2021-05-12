import React, { Component } from 'react';
import '../App.css';
import '../assets/css/alfa_style.css';
import '../assets/css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from "../assets/images/avatar.jpg";


class PasswordComponent extends Component {
	constructor() {
		super();
		this.showPassword = this.showPassword.bind(this);
		this.state = {
			fields: {},
			errors: {},
			hidden: true,
			redirect: false,
			accounts: []
		};
	}


	componentDidMount() {
		fetch('https://alfafrontend.herokuapp.com/change_password/')
			.then(res => res.json())
			.then(data => {
				this.setState(
					(prevState) => { return { accounts: data.info } }
				)
			});
	}

	// postData(event) {
	// 	event.preventDefault();
	// 	let fields = this.state.fields;

	// 	let data = { email: fields["email"], password: fields["password"] };
	// 	let options = {
	// 		method: 'post',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(data)
	// 	}
	// 	fetch('http://localhost:3001/change_password/', options);
	// }

	// delData() {
	//   let data = { brand: this.state.delBrand, model: this.state.delModel, year: this.state.delYear };
	//   let options = {
	//     method: 'delete',
	//     headers: {
	//       'Content-Type': 'application/json'
	//     },
	//     body: JSON.stringify(data)
	//   }
	//   fetch('http://localhost:3001/dealership/', options);
	// }

	updateData() {
		let fields = this.state.fields;
		let data = { email: fields["email"], password: fields["password"] };

		// let data = { brand: this.state.updateBrand, model: this.state.updateModel, year: this.state.updateYear, id: this.state.updateID };
		let options = {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}
		fetch('https://alfafrontend.herokuapp.com/change_password/', options);
	}

	getData() {
		fetch('https://alfafrontend.herokuapp.com/change_password/')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.setState(
					(prevState) => { return { accounts: data } }  // I added the .info to data.info
				)
			});
	}

	// handleChange(event) {
	//   this.setState({ [event.target.name]: event.target.value });
	// }


	handleChange(field, e) {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });
	}



	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;
		this.getData()

		// Checking to see if the account is in the database
		if (typeof fields["email"] !== "undefined" || typeof fields["oldPassword"] !== "undefined") {

			this.state.accounts.map((account) => {
				let em = account.email;
				let pw = account.password;

				if (fields["email"] === em && fields["oldPassword"] === pw) {
					formIsValid = true;
				} else {
					formIsValid = false;
				}
			})
			if (formIsValid === false) {
				alert("This account doesn't appear to exist!");
			}
		}

		// Password & confirm password
		if (!fields["password"]) {
			formIsValid = false;
			errors["password"] = "Cannot be empty";
		}
		if (!fields["confirm_password"]) {
			formIsValid = false;
			errors["confirm_password"] = "Cannot be empty";
		}

		if (typeof fields["password"] !== "undefined" || typeof fields["confirm_password"] !== "undefined") {
			if (fields["password"] !== fields["confirm_password"]) {
				formIsValid = false;
				errors["password"] = "Password and Confirm Password don't Match!";
				errors["confirm_password"] = "Password and Confirm Password don't Match!";
				alert("New Password and Confirm New Password Don't Match!");
				this.clearFunc();
			}
		}

		this.setState({ errors: errors });
		return formIsValid;
	}

	contactSubmit(e) {
		e.preventDefault();

		if (this.handleValidation()) {
			this.updateData();
			window.location = "./login.js";
			alert("You have successfully changed your password!");
		}
	}

	clearFunc() {
		let fields = this.state.fields;

		fields["password"] = "";
		fields["confirm_password"] = "";

		this.setState({ fields: fields });
	}

	showPassword() {
		this.setState({ hidden: !this.state.hidden });
	}

	render() {
		return (
			<div id="main">
				<div className="login-form" align="center">
					<h2>Change Account Password</h2>
					<form action="./home.js" onSubmit={this.contactSubmit.bind(this)} >
						<div className="text-center" align="center">
							<img src={avatar} alt="./assets/images/avatar.jpg" className="img-circle avatar" />
						</div>

						<div className="form-group">
							<input
								refs="email"
								type="text"
								name="email"
								placeholder="Email"
								className="form-control"
								onChange={this.handleChange.bind(this, "email")}
								value={this.state.fields["email"]}
								required="required" />
						</div>
						<div className="form-group">
							<input
								ref="oldPassword"
								name="oldPassword"
								type="text"
								className="form-control"
								placeholder="Old Password"
								onChange={this.handleChange.bind(this, "oldPassword")}
								value={this.state.fields["oldPassword"]}
								required="required" />
						</div>
						<div className="form-group">
							<input
								refs="password"
								type={this.state.hidden ? 'password' : 'text'}
								name="password"
								placeholder="New Password"
								className="form-control"
								onChange={this.handleChange.bind(this, "password")}
								value={this.state.fields["password"]}
								required="required" />
						</div>
						<div className="form-group">
							<input
								refs="confirm_password"
								type={this.state.hidden ? 'password' : 'text'}
								name="confirm_password"
								placeholder="Confirm New Password"
								className="form-control"
								onChange={this.handleChange.bind(this, "confirm_password")}
								value={this.state.fields["confirm_password"]}
								required="required" />
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-success btn-lg btn-block" >Change</button>
						</div>
						<div className="form-group">
							<input type="checkbox" onClick={this.showPassword} />Show Password
						</div>
					</form>
					<div className="bot">Already have an account? <a href="./login.js">Sign in</a></div>
				</div>
			</div>

			// Sign up template, https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=sign-up-form-with-icons
			// I changed the formatting and added all my own regexp  

			// I used this for the showPassword function
			// https://edvins.io/show-and-hide-password-in-react
		)

	}
}

export default PasswordComponent;
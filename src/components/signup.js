import React, { Component } from 'react';
import '../App.css';
import '../assets/css/alfa_style.css';
import '../assets/css/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignupComponent extends Component {
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
		fetch('http://localhost:3001/signup/')
			.then(res => res.json())
			.then(data => {
				this.setState(
					(prevState) => { return { accounts: data.info } }
				)
			});
	}

	getData() {
		fetch('http://localhost:3001/signup/')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.setState(
					(prevState) => { return { accounts: data } }  // I added the .info to data.info
				)
			});
	}

	postData(event) {
		event.preventDefault();
		console.log("here");
		let fields = this.state.fields;
		// let data = { email: "Joe", password: "Hi" };

		let data = { email: fields["email"], password: fields["password"] };
		let options = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}
		fetch('http://localhost:3001/signup/', options);
	}

	handleChange(field, e) {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });
	}



	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;
		this.getData();

		const name_filter = /^[a-zA-Z]+$/;
		const email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;



		if (!fields["name"]) {
			formIsValid = false;
			errors["name"] = "Cannot be empty";
		}

		if (typeof fields["name"] !== "undefined") {
			if (!name_filter.test(fields["name"])) {
				formIsValid = false;
				errors["name"] = "Please enter a valid first name!";

				alert("Please enter a valid first name!");
			}
		}

		// Email
		if (!fields["email"]) {
			formIsValid = false;
			errors["email"] = "Cannot be empty";
		}

		if (typeof fields["email"] !== "undefined") {
			if (!email_filter.test(fields["email"])) {
				formIsValid = false;
				errors["email"] = "Please enter a valid email!";

				alert("Please enter a valid email!");
			}
		}

		for (var i = 0; i < this.state.accounts.length; i++) {
			if (this.state.accounts[i].email === fields["email"]) {
				formIsValid = false;
				alert("Sorry but this email has already been taken!")
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
				alert("Password and Confirm Password Don't Match!");
				this.clearFunc();
			}
		}

		this.setState({ errors: errors });
		return formIsValid;
	}

	contactSubmit(e) {
		e.preventDefault();

		if (this.handleValidation()) {
			this.postData(e);
			window.location = "./home.js";
			alert("Thank you for signing up!");
		}

	}

	// handleChange(field, e) {
	// 	let fields = this.state.fields;
	// 	fields[field] = e.target.value;
	// 	this.setState({ fields });
	// }

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
				<div className="signup-form" align="center">
					<h2>Sign up</h2>
					<form action="./home.js" onSubmit={this.contactSubmit.bind(this)} >
						<div className="form-group">
							<input
								ref="name"
								name="username"
								type="text"
								className="form-control"
								placeholder="First name"
								onChange={this.handleChange.bind(this, "name")}
								value={this.state.fields["name"]}
								required="required" />
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
								refs="password"
								type={this.state.hidden ? 'password' : 'text'}
								name="password"
								placeholder="Password"
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
								placeholder="Confirm Password"
								className="form-control"
								onChange={this.handleChange.bind(this, "confirm_password")}
								value={this.state.fields["confirm_password"]}
								required="required" />
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-success btn-lg btn-block" >Submit</button>
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

export default SignupComponent;
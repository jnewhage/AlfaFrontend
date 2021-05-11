import React, { Component } from 'react';
import '../App.css';
// import $ from 'jquery';
import '../assets/css/login.css';
import '../assets/css/alfa_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from "../assets/images/avatar.jpg";


class LoginComponent extends Component {
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
    fetch('http://localhost:3001/login/')
      .then(res => res.json())
      .then(data => {
        this.setState(
          (prevState) => { return { accounts: data.info } }
        )
      });
  }

  getData() {
    fetch('http://localhost:3001/login/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(
          (prevState) => { return { accounts: data } }  // I added the .info to data.info
        )
      });
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }



  // componentDidMount() {
  //   var id = this.getCookie("id");
  //   var pass = this.getCookie("pass");

  //   if (id && pass) {
  //     document.getElementById("email").value = id;
  //     document.getElementById("password").value = pass;
  //     $("#myCheck").prop("checked", true);

  //   } else {
  //     this.deleteCookie("pass");
  //     this.deleteCookie("id");
  //     this.clearFunc();
  //     $("#myCheck").prop("checked", false);
  //   }
  // }

  //Reset input fields
  clearFunc() {
    let fields = this.state.fields;

    fields["email"] = "";
    fields["password"] = "";

    this.setState({ fields: fields });
  }

  // Remember Input fields
  setRememberChkBox() {
    if (this.getCookie("id") != null && this.getCookie("pass") != null) {
      this.deleteCookie("pass");
      this.deleteCookie("id");
      this.clearFunc();
    }
  }

  // Show the password
  showPassword() {
    this.setState({ hidden: !this.state.hidden });
  }

  // delete individual cookies
  deleteCookie(name) {
    // Set expire to an older date
    document.cookie = name + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }

  // Set individual cookies
  setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Get individual cookies
  getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = false;
    this.getData()

    if (typeof fields["email"] !== "undefined" || typeof fields["password"] !== "undefined") {

      this.state.accounts.map((account) => {
        let em = account.email;
        let pw = account.password;

        if (fields["email"] === em && fields["password"] === pw) {
          formIsValid = true;
        } else {
          formIsValid = false;
        }
      })
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      window.location = "./home.js";
      alert("You have successfully logged in!");
    } else {
      window.location = "./login.js";
      alert("You have typed either the wrong email or password!")
    }

  }

  render() {
    return (
      <div id="main">
        <div className="login-form">
          <h2>Sign in to Your Account</h2>
          <form action="./home.js" onSubmit={this.contactSubmit.bind(this)} >
            <div className="text-center" align="center">
              <img src={avatar} alt="./assets/images/avatar.jpg" className="img-circle avatar" />
            </div>

            <div className="form-group" align="center">
              <input
                ref="email"
                name="email"
                type="text"
                className="form-control"
                placeholder="Enter email"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
                required="required" />

              <input
                ref="password"
                name="password"
                type={this.state.hidden ? 'password' : 'text'}
                className="form-control"
                placeholder="Enter password"
                onChange={this.handleChange.bind(this, "password")}
                value={this.state.fields["password"]}
                required="required" />
            </div>

            <div className="form-group" align="center">
              <button type="submit" className="btn btn-success btn-lg btn-block" >Sign in</button>
              {/* <button type="reset" className="btn btn-primary btn-block" >Reset</button> */}
            </div>
            <input type="checkbox" onClick={this.showPassword} />Show Password
            <br />
            <input type="checkbox" value="0" onClick={this.setRememberChkBox()} id="myCheck" />Remember
          </form>
          {/* <span><b className="valid">User Name : guest@gmail.com<br />Password : guest</b></span> */}
          <p className="text-center" align="center"><a href="change_password.js">Change Account Password</a></p>

          <p className="text-center" align="center"><a href="signup.js">Create an Account</a></p>
        </div>
      </div >
    );
  }
}

export default LoginComponent;
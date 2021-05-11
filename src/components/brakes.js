import React, { Component } from 'react';
import '../assets/css/mechanics.css';
import '../assets/css/brakes_engine_electrical.css';

import '../assets/css/alfa_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import caliper from "../assets/images/caliper.jpeg";
import brakes2 from "../assets/images/brakes2.jpeg";
import brakes3 from "../assets/images/brakes3.jpg";
import brakes4 from "../assets/images/brakes4.jpg";

class BrakesComponent extends Component {
  constructor() {
    super();
    this.state = {
      accounts2: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/brakes/')
      .then(res => res.json())
      .then(data => {
        this.setState(
          (prevState) => { return { accounts2: data.info } }
        )
      });
  }

  postData(desc, prices) {
    // event.preventDefault();
    let data = { description: desc, price: prices };
    let options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/brakes/', options);
  }

  contactSubmit(e, flg, desc, price) {
    var flgg = true;

    if (flgg) {
      this.postData(flg, desc);
      window.location = "./home.js";
      alert("You have just added this to your cart!");
      flgg = false;
    }
  }


  render() {
    let desc1 = "Brembo Caliper Set For 330mm Brake System";
    let price1 = 949.99;
    let desc2 = "Forged Dynalite Rear Drag Brake Kit";
    let price2 = 168.99;
    let desc3 = "Wilwood 140-11206 BNDLR Sprint Rear Inboard Disc Brake";
    let price3 = 127.85;
    let desc4 = "Bundle of Four Wilwood Disc Brakes";
    let price4 = 449.99;
    let flg = true;

    return (
      <div id="main">
        <h1 align="center"> Brakes</h1>
        <div className="grid-container" style={{ marginLeft: "30em", width: "110%", marginTop: "2%" }}>
          <div className="grid-child purple">
            <div className="card card-default" id="card_contacts">
              <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                <ul className="list-group pull-down" id="contact-list">
                  <li className="list-group-item">
                    <div className="row w-100">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={caliper} alt="../assets/images/caliper.jpeg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                        <label className="headerP">Brembo Caliper Set For 330 mm Brake System</label>
                        <br />
                        <span className="description">Alfa Romeo Brembo Caliper Set. Fits Veloces, Giulias, and Spiders.</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$949.99</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="buy-form">
                          <form action="home.js" onSubmit={this.contactSubmit.bind(this, flg, desc1, price1)}>
                            <button type="submit" className="btn btn-primary btn-block">Add to Cart!</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row w-100">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={brakes2} alt="../assets/images/brakes2.jpeg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div class="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <label class="headerP">Forged Dynalite Rear Drag Brake Kit</label>
                        <br />
                        <span className="description">Confirm Fitment w/ Compatibility Chart 10-Year Warranty</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$168.99</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="buy-form">
                          <form action="home.js" onSubmit={this.contactSubmit.bind(this, flg, desc2, price2)}>
                            <button type="submit" className="btn btn-primary btn-block">Add to Cart!</button>
                          </form>
                          <br />
                        </div>
                        <br />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row w-100">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={brakes3} alt="../assets/images/brakes3.jpg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <span className="fa fa-envelope fa-lg text-danger float-right" title="left you a message"></span>
                        <label className="headerP">Wilwood 140-11206 BNDLR Sprint Rear Inboard Disc Brake</label>
                        <br />
                        <span className="description">These Wilwood brakes feature a fully engineered bolt-on brake
                        system.</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$127.85</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="buy-form">
                          <form action="home.js" onSubmit={this.contactSubmit.bind(this, flg, desc3, price3)}>
                            <button type="submit" className="btn btn-primary btn-block">Add to Cart!</button>
                          </form>
                          <br />
                        </div>
                        <br />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row w-100">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={brakes4} alt="../assets/images/brakes4.jpg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <label className="headerP">NEW WILWOOD DISC BRAKE KIT, 13" FRONT & 12" REAR DR</label>
                        <br />
                        <span className="description">Bundle of Four Wilwood Disc Brakes. </span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$449.99</span>
                        <br />
                        <br />
                        <br />
                        <div className="buy-form">
                          <form action="home.js" onSubmit={this.contactSubmit.bind(this, flg, desc4, price4)}>
                            <button type="submit" className="btn btn-primary btn-block">Add to Cart!</button>
                          </form>
                          <br />
                        </div>
                        <br />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BrakesComponent;
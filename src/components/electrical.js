import React, { Component } from 'react';
import '../assets/css/mechanics.css';
import '../assets/css/brakes_engine_electrical.css';

import '../assets/css/alfa_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fusebox from "../assets/images/fusebox.jpg";
import bluetooth from "../assets/images/bluetooth.jpg";
import battery from "../assets/images/battery.jpeg";
import radio from "../assets/images/radio.jpeg";

class ElectricalComponent extends Component {
  constructor() {
    super();
    this.state = {
      accounts2: []
    };
  }


  componentDidMount() {
    fetch('https://alfafrontend.herokuapp.com/electrical/')
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
    fetch('https://alfafrontend.herokuapp.com/electrical/', options);
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
    let desc1 = "(NOS) Universal Fuse Box CF1 1st Series";
    let price1 = 94.99;
    let desc2 = "Bluetooth Car Adapter for Fiat, Alfa Romeo, Lancia, & More w/ Wire";
    let price2 = 5.99;
    let desc3 = "NEW! L4 2.0L AGM Battery";
    let price3 = 599.95;
    let desc4 = "1969-74 Blaupunkt – Retro Manufacturing";
    let price4 = 150.00;
    let flg = true;

    return (
      <div id="main">
        <h1 align="center"> Electronics </h1>
        <div className="grid-container" style={{ marginLeft: "30em", width: "110%", marginTop: "2%" }}>
          <div className="grid-child purple">
            <div className="card card-default" id="card_contacts">
              <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                <ul className="list-group pull-down" id="contact-list">
                  <li className="list-group-item">
                    <div className="row w-100">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={fusebox} alt="../assets/images/fusebox.jpg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                        <label className="headerP">Universal 916 Fuse Box </label>
                        <br />
                        <span className="description">(NOS) Universal Fuse Box CF1 1st Series </span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$94.99</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="buy-form">
                          <form action="home.js" onSubmit={this.contactSubmit.bind(this, flg, desc1, price1)}>
                            <button type="submit" className="btn btn-primary btn-block" >Add to Cart!</button>
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
                        <img src={bluetooth} alt="../assets/images/bluetooth.jpg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <label className="headerP">Bluetooth Car Adapter </label>
                        <br />
                        <span className="description">Bluetooth Car Adapter for Fiat, Alfa Romeo, Lancia, & More w/ Wire!</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$5.99</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div class="buy-form">
                          <form action="home.js" onSubmit={this.contactSubmit.bind(this, flg, desc2, price2)}>
                            <button type="submit" class="btn btn-primary btn-block" >Add to Cart!</button>
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
                        <img src={battery} alt="../assets/images/battery.jpeg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <span className="fa fa-envelope fa-lg text-danger float-right" title="left you a message"></span>
                        <label className="headerP">2.0L Battery </label>
                        <br />
                        <span className="description">NEW! L4 2.0L AGM Battery.</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$599.95</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="buy-form">
                          <form action="home.js" onSubmit={this.contactSubmit.bind(this, flg, desc3, price3)}>
                            <button type="submit" className="btn btn-primary btn-block" >Add to Cart!</button>
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
                        <img src={radio} alt="../assets/images/radio.jpeg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <label className="headerP">GT 147 Blaupunkt Radio </label>
                        <br />
                        <span className="description">1969-74 Blaupunkt – Retro Manufacturing.</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$150.00</span>
                        <br />
                        <br />
                        <br />
                        <div className="buy-form">
                          <form action="home.js" onSubmit={this.contactSubmit.bind(this, flg, desc4, price4)}>
                            <button type="submit" className="btn btn-primary btn-block" >Add to Cart!</button>
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

export default ElectricalComponent;
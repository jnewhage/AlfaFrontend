import React, { Component } from 'react';
import '../assets/css/mechanics.css';
import '../assets/css/brakes_engine_electrical.css';

import '../assets/css/alfa_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import valvecover from "../assets/images/valvecover.jpg";
import pistons from "../assets/images/pistons.jpg";
import timingchain from "../assets/images/timingchain.jpg";
import oilsump from "../assets/images/oilsump.jpg";

class EngineComponent extends Component {
  constructor() {
    super();
    this.state = {
      accounts2: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/engine/')
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
    fetch('http://localhost:3001/engine/', options);
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
    let desc1 = "Type 105 Valve Cover";
    let price1 = 199.99;
    let desc2 = "NEW! High Performance Pistons";
    let price2 = 999.99;
    let desc3 = "159 Brera Spider Timing Chain";
    let price3 = 85.95;
    let desc4 = "Engine Oil Sump";
    let price4 = 474.99;
    let flg = true;

    return (
      <div id="main">
        <h1 align="center"> Engine Components</h1>

        <div className="grid-container" style={{ marginLeft: "30em", width: "110%", marginTop: "2%" }}>
          <div className="grid-child purple">
            <div className="card card-default" id="card_contacts">
              <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                <ul className="list-group pull-down" id="contact-list">
                  <li className="list-group-item">
                    <div className="row w-100">
                      <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src={valvecover} alt="../assets/images/valvecover.jpg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                        <label className="headerP"> Type 105 Valve Cover </label>
                        <br />
                        <span className="description">Original Valve Cover 1971-1976</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$199.99</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="buy-form">
                          <form action="home.js" onSubmit={this.contactSubmit.bind(this, flg, desc1, price1)}>
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
                        <img src={pistons} alt="../assets/images/pistons.jpg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <label className="headerP">164/75 3.0 V6 WOSSNER Pistons </label>
                        <br />
                        <span className="description">NEW! High Performance Pistons!</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$999.99</span>
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
                        <img src={timingchain} alt="../assets/images/timingchain.jpg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <span className="fa fa-envelope fa-lg text-danger float-right" title="left you a message"></span>
                        <label className="headerP">159 Brera Spider Timing Chain</label>
                        <br />
                        <span className="description">Timing Chain for a 159 Brera JTS 939A0 3.2 V6</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$85.95</span>
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
                        <img src={oilsump} alt="../assets/images/oilsump.jpg" style={{ width: "100%", minHeight: "200px" }} />
                      </div>
                      <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <label className="headerP">Engine Oil Sump</label>
                        <br />
                        <span className="description">NEW! Fits V6 Alfa Romeo, GTV6, Milano, and Fiat Engines.</span>
                        <br />
                        <br />
                        <br />
                        <br />
                        <span className="price">$474.99</span>
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

export default EngineComponent;
import React, { Component } from 'react';
import '../assets/css/mechanics.css';
import '../assets/css/alfa_gtv6_milano.css';

import '../assets/css/alfa_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import brakes from "../assets/images/brakes.jpeg";
import engine from "../assets/images/engine.jpg";
import electrical from "../assets/images/electrical.jpeg";

class MilanoPartsComponent extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div id="main">
                <h1 align="center">Milano Parts</h1>

                <div className="container">
                    <div id="car-brands" className="row">
                        <div className="col-sm-6 col-lg-4 p-3 mb-3">
                            <a href="brakes.js">
                                <div className="item">
                                    <h4 className="text-uppercase" align="center">Brakes</h4>
                                    <div className="cars">
                                        <img src={brakes} alt="../assets/images/brakes.jpeg" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-lg-4 p-3 mb-3">
                            <a href="engine.js">
                                <div className="item">
                                    <h4 className="text-uppercase" align="center">Engine Components</h4>
                                    <div className="cars">
                                        <img src={engine} alt="../assets/images/engine.jpg" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-lg-4 p-3 mb-3">
                            <a href="electrical.js">
                                <div className="item">
                                    <h4 className="text-uppercase" align="center">Electrical</h4>
                                    <div className="cars">
                                        <img src={electrical} alt="../assets/images/electrical.jpeg" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MilanoPartsComponent;
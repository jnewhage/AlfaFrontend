import React, { Component } from 'react';
import '../assets/css/alfa_style.css';
import '../assets/css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import spider from "../assets/images/spider.jpeg";
import alfa2 from "../assets/images/alfa2.jpg";
import alfa3 from "../assets/images/alfa3.jpg";
import alfa1 from "../assets/images/alfa1.jpg";
import gtv6 from "../assets/images/gtv6.jpg";
import milano from "../assets/images/milano.jpg";

class HomeComponent extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div id="main">
				<h1 align="center" >John's Auto Parts</h1>
				<div className="slideshow-container" align="center" style={{ marginTop:"1%" }}>
					<Slideshow />
				</div>
				<br />
				<div className="container" >
					<div id="car-brands" className="row">
						<div className="col-sm-6 col-lg-4 p-3 mb-3">
							<a href="alfa_parts.js">
								<div className="item">
									<h4 className="text-uppercase" align="center">Spider</h4>
									<div className="cars">
										<img src={alfa1} alt="../assets/images/alfa1.jpg" />
									</div>
								</div>
							</a>
						</div>
						<div className="col-sm-6 col-lg-4 p-3 mb-3">
							<a href="GTV6_parts.js">
								<div className="item">
									<h4 className="text-uppercase" align="center">GTV 6</h4>
									<div className="cars">
										<img src={gtv6} alt="../assets/images/gtv6.jpg" />
									</div>
								</div>
							</a>
						</div>
						<div className="col-sm-6 col-lg-4 p-3 mb-3">
							<a href="milano_parts.js">
								<div className="item">
									<h4 className="text-uppercase" align="center">Milano</h4>
									<div className="cars">
										<img src={milano} alt="../assets/images/milano.jpg" />
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

const Slideshow = () => {
	return (
		<div>
			<Slide easing="ease">
				<div className="each-slide">
					<div>
						<img src={spider} alt=""  />
					</div>
				</div>
				<div className="each-slide">
					<div >
						<img src={alfa2} alt="" />
					</div>
				</div>
				<div className="each-slide">
					<div >
						<img src={alfa3} alt="" />
					</div>
				</div>
			</Slide>
		</div>
	)
};

// https://react-slideshow.herokuapp.com/

export default HomeComponent;
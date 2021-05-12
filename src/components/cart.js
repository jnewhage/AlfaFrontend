import React, { Component } from 'react';
import '../assets/css/alfa_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/checkout.css';


class CartComponent extends Component {
	constructor() {
		super();
		this.state = {
			accounts2: []
		};
	}

	componentDidMount() {
		fetch('https://alfafrontend.herokuapp.com/cart/')
			.then(res => res.json())
			.then(data => {
				this.setState(
					(prevState) => { return { accounts2: data.info } }
				)
			});
	}

	getData() {
		fetch('https://alfafrontend.herokuapp.com/cart/')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.setState(
					(prevState) => { return { accounts2: data } }  // I added the .info to data.info
				)
			});
	}

	sum() {
		let sums = 0;

		for (var i = 0; i < this.state.accounts2.length; i++) {
			sums += this.state.accounts2[i].price;
		}

		sums = sums * 100;
		sums = sums / 100;

		return sums;
	}

	delData(itemDesc, itemPrice, itemId, e) {
		let flgg = true;
		let data = { id: itemId, description: itemDesc, price: itemPrice };

		let options = {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}
		fetch('https://alfafrontend.herokuapp.com/cart/', options);

		if (flgg) {
			flgg = false;
			window.location = "./cart.js";
		}
	}

	switchPage() {
		window.location = "./home.js";
	}

	render() {
		var mon = this.sum();

		return (
			<div className="main">
				<main className="page payment-page" style={{ marginTop: "-1em" }}>
					<section className="payment-form dark">
						<div className="container">
							<div className="block-heading">
								<h1 align="center" >Shopping Cart</h1>
							</div>
							<form >

								<div className="products">
									{this.state.accounts2.map(items => <span key={items.id}>
										<div className="item">
											<span className="price" style={{ paddingTop: "0.5em" }}>${items.price}</span>

											<p className="item-name">
												<button
													type="button"
													className="btn btn-lg btn-primary"
													onClick={this.delData.bind(this, items.description, items.price, items.id)}
													style={{ marginRight: "1em" }}> X</button>
												{items.description}
											</p>
										</div>
									</span>)}
									<div className="total">Total<span className="price">${mon}</span></div>
								</div>
								<div className="card-details">
									<div className="row">
										<form action="./checkout.js" style={{ borderTop: "white", minWidth: "10em" }}>

											<button
												type="submit"
												className="btn btn-success btn-lg btn-block"
												onSubmit={this.switchPage.bind()}
												style={{ paddingLeft: "1em", paddingRight: "1em", marginTop: "-1em" }}> Proceed to Checkout</button>
										</form>
									</div>
								</div>
							</form>
						</div>
					</section>
				</main>
			</div>
		)
	}
}


export default CartComponent;
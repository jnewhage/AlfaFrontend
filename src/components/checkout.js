import React, { Component } from 'react';
import '../assets/css/checkout.css';
import '../assets/css/alfa_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CheckoutComponent extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {},
            accounts2: []
        };
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

        let cardholder_filter = /^([a-zA-Z\.\-])+\s([a-zA-Z\.\-])+$/;
        let expireM_filter = /^[0-9]{2}$/;
        let expireY_filter = /^[0-9]{2}$/;
        let cardnumber_filter = /^(([0-9]){16})|(([0-9]){4}\s([0-9]){4}\s([0-9]){4}\s([0-9]){4})$/;
        let cvv_filter = /^[0-9]{3}$/;


        if (typeof fields["card-holder"] !== "undefined") {
            if (!cardholder_filter.test(fields["card-holder"])) {
                formIsValid = false;
                errors["card-holder"] = "Invalid name for card holder!";

                alert("Please enter a valid card holder.");
                this.clearCH();
            }
        }

        if (typeof fields["expireM"] !== "undefined") {
            if (!expireM_filter.test(fields["expireM"])) {
                formIsValid = false;
                errors["expireM"] = "Please enter a valid expiration date.";

                alert("Please enter a valid expiration date.");
                this.clearExpire();
            }
        }

        if (typeof fields["expireY"] !== "undefined") {
            if (!expireY_filter.test(fields["expireY"])) {
                formIsValid = false;
                errors["expireY"] = "Please enter a valid expiration date.";

                alert("Please enter a valid expiration date.");
                this.clearExpire();
            }
        }

        if (typeof fields["card-number"] !== "undefined") {
            if (!cardnumber_filter.test(fields["card-number"])) {
                formIsValid = false;
                errors["card-number"] = "Please enter a valid card number.";

                alert("Please enter a valid card number.");
                this.clearCN();
            }
        }

        if (typeof fields["cvv"] !== "undefined") {
            if (!cvv_filter.test(fields["cvv"])) {
                formIsValid = false;
                errors["cvv"] = "Please enter a valid cvv!";

                alert("Please enter a valid cvv.");
                this.clearCVV();
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {

            if (this.state.accounts2.length === 0) {
                alert("You don't have anything in your cart!")
                window.location = "./home.js";
            } else {
                this.delData();
                window.location = "./home.js";
                alert("Thank you for your purchase!");
            }
        }
    }

    clearCH() {
        let fields = this.state.fields;

        fields["card-holder"] = "";
        this.setState({ fields: fields });
    }

    clearExpire() {
        let fields = this.state.fields;

        fields["expireM"] = "";
        fields["expireY"] = "";

        this.setState({ fields: fields });
    }

    clearCN() {
        let fields = this.state.fields;

        fields["card-number"] = "";

        this.setState({ fields: fields });
    }

    clearCVV() {
        let fields = this.state.fields;

        fields["cvv"] = "";

        this.setState({ fields: fields });
    }


    componentDidMount() {
        fetch('http://localhost:3001/checkout/')
            .then(res => res.json())
            .then(data => {
                this.setState(
                    (prevState) => { return { accounts2: data.info } }
                )
            });
    }

    getData() {
        fetch('http://localhost:3001/checkout/')
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

    delData() {
        for (var i = 0; i < this.state.accounts2.length; i++) {
            let data = { id: this.state.accounts2[i].id, description: this.state.accounts2[i].description, price: this.state.accounts2[i].price };
            let options = {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            fetch('http://localhost:3001/checkout/', options);
        }
    }

    render() {
        var mon = this.sum();

        return (
            <div className="main" >
                <main className="page payment-page" style={{ marginTop: "-1em" }}>
                    <section className="payment-form dark">
                        <div className="container">
                            <div className="block-heading">
                                <h2>Checkout</h2>
                            </div>
                            <form action="./index.js" onSubmit={this.contactSubmit.bind(this)}>
                                <div className="products">
                                    {this.state.accounts2.map((items) => <span key={items.id}>
                                        <div className="item">
                                            <span className="price">${items.price}</span>
                                            <p className="item-name">{items.description}</p>
                                        </div>
                                    </span>)}


                                    <div className="total">Total<span className="price">${mon}</span></div>
                                </div>
                                <div className="card-details">
                                    <h3 className="t">Credit Card Details</h3>
                                    <div className="row">
                                        <div className="form-group col-sm-7">
                                            <label for="card-holder">Card Holder</label>
                                            <input
                                                ref="card-holder"
                                                name="card-holder"
                                                id="card-holder"
                                                type="text"
                                                className="form-control"
                                                placeholder="Card Holder"
                                                onChange={this.handleChange.bind(this, "card-holder")}
                                                value={this.state.fields["card-holder"]}
                                                aria-describedby="basic-addon1"
                                                aria-label="Card Holder"
                                                required="required" />
                                        </div>
                                        <div className="form-group col-sm-5">
                                            <label for="">Expiration Date</label>
                                            <div className="input-group expiration-date">
                                                <input
                                                    ref="expireM"
                                                    name="expireM"
                                                    id="expireM"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="MM"
                                                    onChange={this.handleChange.bind(this, "expireM")}
                                                    value={this.state.fields["expireM"]}
                                                    aria-describedby="basic-addon1"
                                                    aria-label="MM"
                                                    required="required" />
                                                <span className="date-separator">/</span>
                                                <input
                                                    ref="expireY"
                                                    name="expireY"
                                                    id="expireY"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="YY"
                                                    onChange={this.handleChange.bind(this, "expireY")}
                                                    value={this.state.fields["expireY"]}
                                                    aria-describedby="basic-addon1"
                                                    aria-label="YY"
                                                    required="required" />
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-8" >
                                            <label for="card-number">Card Number</label>
                                            <input
                                                ref="card-number"
                                                name="card-number"
                                                id="card-number"
                                                type="text"
                                                className="form-control"
                                                placeholder="Card Number"
                                                onChange={this.handleChange.bind(this, "card-number")}
                                                value={this.state.fields["card-number"]}
                                                aria-describedby="basic-addon1"
                                                aria-label="card-number"
                                                required="required" />
                                        </div>
                                        <div className="form-group col-sm-4" >
                                            <label for="cvv">CVV</label>
                                            <input
                                                ref="cvv"
                                                name="cvv"
                                                id="cvv"
                                                type="text"
                                                className="form-control"
                                                placeholder="CVV"
                                                onChange={this.handleChange.bind(this, "cvv")}
                                                value={this.state.fields["cvv"]}
                                                aria-describedby="basic-addon1"
                                                aria-label="cvv"
                                                required="required" />
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <button type="submit" className="btn btn-success btn-lg btn-block">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
            //  Bootstrap template, https://tutorialzine.com/2018/02/freebie-4-beautiful-checkout-forms
            //  I added all the regexp and changed som minor aspects of the code around. 
        )
    }
}

export default CheckoutComponent;
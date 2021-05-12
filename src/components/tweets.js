import React, { Component } from 'react';
import '../assets/css/alfa_style.css';
import '../assets/css/mechanics.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// var Twitter = require('twitter');

class TwitterComponent extends Component {
    constructor() {
        super();
        this.state = {
            accounts: []
        };
    }


    componentDidMount() {
        fetch('https://alfafrontend.herokuapp.com/tweets/')
            .then(res => res.json())
            .then(data => {
                this.setState(
                    (prevState) => { return { accounts: data.info.statuses } }
                )
            });
    }

    getData() {
        fetch('https://alfafrontend.herokuapp.com/tweets/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState(
                    (prevState) => { return { accounts: data.statuses } }
                )
            });
    }

    twt() {
        // alert("Oi!")
        for (let i = 0; i < this.state.accounts.length; i++) {
            // alert("Oi")
            if (this.state.accounts !== null) {
                // alert("not null!")

                // console.log(this.state.accounts[i].text)

            } else {
                alert("null!")
            }
        }
    }


    render() {
        this.getData.bind();
        let x = this.twt();
        // console.log(x.className)

        // console.log("op" + this.state.accounts.statuses)

        return (
            <div id="main">
                <h1 align="center" >Other Reviews</h1>

                <div className="grid-container" style={{ marginTop: "2em", marginLeft: "40em" }}>
                    <div className="grid-child purple">
                        <div className="card  card-default" id="card_contacts">
                            <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                                {this.state.accounts.map((items) => <span key={items.id}>
                                    <div className="item">
                                        <span className="price">{items.text}</span>
                                        <p>------------</p>
                                    
                                    </div>
                                </span>)}


                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TwitterComponent;
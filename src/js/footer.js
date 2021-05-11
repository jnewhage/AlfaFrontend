import React, { Component } from 'react';
import '../assets/css/alfa_style.css';

class Footer extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    // <div class="scroll"><a>&#10095;</a></div>

    render() {
        return (
            <div>
                <div className="scroll"></div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default Footer;
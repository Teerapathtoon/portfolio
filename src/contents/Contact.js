import React, { Component } from 'react'

import Social from '../components/Social'

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : Teerapath.k@hotmail.com</h3>
                <h3>Tel: 092-752-6669</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;

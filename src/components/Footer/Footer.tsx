import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import logo from './../../../src/logo.svg';

export default class Footer extends Component {
    footerStyles = {
        padding: '0.25rem 1rem',
        backgroundColor: '#343a40',
        color: '#fff',
    };
    render() {
        return (
            <div className="footer" style={this.footerStyles}>
                <p className="text-center" style={{margin: 0}}>My Todo App - All rights reserved</p>
            </div>
        )
    }
}
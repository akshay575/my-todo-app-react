import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import logo from './../../../src/logo.svg';

export default class Header extends Component {
    headerStyles = {
        marginBottom: '0',
        padding: '.25rem 1rem'
    };
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" style={this.headerStyles}>
                    <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    My Todo App
                    </Navbar.Brand>
                </Navbar>
            </>
        )
    }
}
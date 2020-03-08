import React, { Component } from "react"
import './Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="main-list">
                    <li><i className="fas fa-calendar-alt icon"></i>All</li>
                    <li><i className="fas fa-calendar-day icon"></i>Today</li>
                    <li><i className="fas fa-calendar-week icon"></i>Last 7 days</li>
                </ul>
            </div>
        );
    }
}
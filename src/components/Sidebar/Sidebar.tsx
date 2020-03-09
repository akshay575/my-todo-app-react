import React, { Component } from "react"
import './Sidebar.css';

interface props {
    onFilterBy: any
}

export default class Sidebar extends Component<props> {
    render() {
        return (
            <div className="sidebar">
                <ul className="main-list">
                    <li onClick={() => this.props.onFilterBy(0)}><i className="fas fa-calendar-day icon"></i>Today</li>
                    <li onClick={() => this.props.onFilterBy(1)}><i className="fas fa-calendar-week icon"></i>Last 7 days</li>
                    <li onClick={() => this.props.onFilterBy(2)}><i className="fas fa-calendar-alt icon"></i>All</li>
                </ul>
            </div>
        );
    }
}
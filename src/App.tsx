import React, { Component } from 'react';
import Todo from './components/Todo/Todo';
import Header from './components/Header/Header';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

interface state {
  filterBy: string
}

export default class App extends Component<{}, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      filterBy: 'Today'
    }
  }
  handleFilterBy = (index: number) => {
    let filterBy = 'Today';
    switch(index) {
      case 0:
        filterBy = 'Today';
        break;
      case 1:
        filterBy = 'Week';
        break;
      case 2:
        filterBy = 'Month';
        break;
    }
    this.setState({
      filterBy
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-3">
            <Sidebar onFilterBy={this.handleFilterBy} />
          </div>
          <div className="col-9 todolist">
            <Todo filterBy={this.state.filterBy} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


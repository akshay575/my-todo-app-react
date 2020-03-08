import React from 'react';
import Todo from './components/Todo/Todo';
import Header from './components/Header/Header';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 todolist">
          <Todo />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

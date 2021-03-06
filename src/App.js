import React, { Component } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import SearchBar from "./components/SearchBar"
import SingleApp from './components/SingleApp';
import About from './components/About';
import ErrorPage from './components/ErrorPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='reports' element={<SearchBar />} />
            <Route path='reports/:appId' element={<SingleApp />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

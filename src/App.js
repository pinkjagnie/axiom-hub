import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './components/ui/SharedLayout';
import Home from './pages/Home';
import SearchBar from "./pages/SearchBar"
import SingleApp from './pages/SingleApp';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

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

import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route } from 'react-router-dom'
import Slider from './Image/Slider'
import Search from './Search/Search';
import Accordion from './Accordion/Accordion';
import List from './List/List';
import Counter from './Counter/Counter'
import Homepage from './HomePage';
import Home from './Home';

function App() {
  return (
    <div className="App">
     <Homepage />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/slider" element={<Slider/>} />
        <Route path = "/accordion" element={<Accordion/>} />
        <Route path = "/counter" element={<Counter/>} />
        <Route path = "/search" element={<Search/>} />
        <Route path = "/list" element={<List/>} />

      </Routes>
    </div>
  );
}

export default App;

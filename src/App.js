import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import placeholderCoverHome from './images/placeholder-cover-home.png';
import CarouselSlider from './components/carousel-slider.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="placeholder-cover-home">
        <img src={placeholderCoverHome} className="placeholder-cover-home-img" />
      </div>
      <div className="general-content-wrapper">
        <CarouselSlider />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import placeholderCoverHome from './images/placeholder-cover-home.png';
import CarouselSlider from './components/carousel-slider.js';
import CarouselCover from './components/carousel-cover.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarouselCover />
      <CarouselSlider />
      <CarouselSlider />
      <CarouselSlider />
    </div>
  );
}

export default App;

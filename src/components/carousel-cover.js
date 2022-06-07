import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/carousel-cover.css';
import thumb001 from '../images/thumb-001.jpg';

const CarouselCover = () => {
  return (
    <section className="carousel-cover-section">
      <div className="carousel-img-cover">
        <img className="thumb" data-src="" alt="" src={thumb001} />
      </div>
      <div className="carousel-img-gradient">
      </div>
      <div className="cover-content">
        <div className="cover-content-nav">
          <a href="#" className="button-back"></a>
          <a href="#" className="button-next"></a>
        </div>
        <div className="highlight-data">
          <h2 className="highlight-name">Customer Experience Essencial</h2>
          <p className="highlight-content">Curso • 22 módulos • 43 Tópicos</p>
          <p className="highlight-description">Introduçao ao processo de dados na base dos seus clientes. Este é um curso que vai deixar você com o conhecimento alinhado com as expectavias de mercado na carreira.</p>
          <div className="highlight-participants">

          </div>
          <div className="highlight-actions">
            <a href="#" className="button button-cian">Iniciar curso</a>
            <a href="#" className="button button-cian-outline">Iniciar curso</a>
          </div>
        </div>
      </div>

    </section>
  )
};

export default CarouselCover;

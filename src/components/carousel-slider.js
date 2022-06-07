import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/carousel-slider.css';
import thumb001 from '../images/thumb-001.jpg';

const CarouselSlider = () => {
  return (
    <section className="carousel-section">

      <div className="carousel-section-bg"></div>

      <h2 className="carousel-section-title">Nome da chamada</h2>

      <div className="carousel-boxline">

        <div className="carousel-container">

          <div className="swiper-slide swiper-slide-visible swiper-slide-active" data-position="001">
            <a className="link " id="#" href="#" target="">
              <div className="thumb-wrapper">
                <img className="thumb" data-src="" alt="" src={thumb001} />
              </div>
              <div className="info-wrapper">
                <h3 className="info-title">Blavlcllclc</h3>
                <p className="info-content">Blavlcllclc</p>
              </div>
            </a>
          </div>

          <div className="swiper-slide swiper-slide-visible" data-position="002">
            <a className="link " id="#" href="#" target="">
              <div className="thumb-wrapper">
                <img className="thumb" data-src="" alt="" src={thumb001} />
              </div>
              <div className="info-wrapper">
                <h3 className="info-title">Blavlcllclc</h3>
                <p className="info-content">Blavlcllclc</p>
              </div>
            </a>
          </div>

          <div className="swiper-slide swiper-slide-visible" data-position="003">
            <a className="link " id="#" href="#" target="">
              <div className="thumb-wrapper">
                <img className="thumb" data-src="" alt="" src={thumb001} />
              </div>
              <div className="info-wrapper">
                <h3 className="info-title">Blavlcllclc</h3>
                <p className="info-content">Blavlcllclc</p>
              </div>
            </a>
          </div>

          <div className="swiper-slide swiper-slide-visible" data-position="004">
            <a className="link " id="#" href="#" target="">
              <div className="thumb-wrapper">
                <img className="thumb" data-src="" alt="" src={thumb001} />
              </div>
              <div className="info-wrapper">
                <h3 className="info-title">Blavlcllclc</h3>
                <p className="info-content">Blavlcllclc</p>
              </div>
            </a>
          </div>

          <div className="swiper-slide swiper-slide-visible" data-position="005">
            <a className="link " id="#" href="#" target="">
              <div className="thumb-wrapper">
                <img className="thumb" data-src="" alt="" src={thumb001} />
              </div>
              <div className="info-wrapper">
                <h3 className="info-title">Blavlcllclc</h3>
                <p className="info-content">Blavlcllclc</p>
              </div>
            </a>
          </div>

        </div>

        <a href="#" className="carousel-prev"></a>
        <a href="#" className="carousel-next"></a>

      </div>

    </section>
  )
};

export default CarouselSlider;

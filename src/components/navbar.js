import React from 'react';
import ReactDOM from 'react-dom';
import logocsaclub from '../images/logo_cs_academy_club.svg';
import chavronDown from '../icons/chavron-down.svg';
import avatar from '../images/avatar-001.png';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <section className="navbar fixed">

      <div className="navbar-wrapper-mobile">
        <img src={logocsaclub} className="navbar-logo" />
      </div>

      <div className="navbar-wrapper-left">
        <img src={logocsaclub} className="navbar-logo" />

        <ul className="navbar-links">
          <li className="navbar-link"><a className="active" href="">Início</a></li>
          <li className="navbar-link"><a className="" href="">Cursos</a></li>
          <li className="navbar-link"><a className="" href="">Cases</a></li>
          <li className="navbar-link"><a className="" href="">Masterclass</a></li>
        </ul>

        <div className="navbar-links-redux">
          Início
          <img src={chavronDown} className="icon-chavron-down" />
        </div>

      </div>

      <div className="navbar-wrapper-right">

        <div className="navbar-input-search">
        </div>

        <div className="navbar-profile">
          <div className="profile-name">
            Rodrigo
            <img src={chavronDown} className="icon-chavron-down" />
          </div>
          <div className="profile-picture">
            <img src={avatar} className="profile-picture-img" />
          </div>
        </div>
      </div>

    </section>
  )
};

export default Navbar;

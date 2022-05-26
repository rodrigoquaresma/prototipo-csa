import React from 'react';
import ReactDOM from 'react-dom';
import logocsaclub from '../images/logo_cs_academy_club.svg';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <section className="navbar">
      <img src={logocsaclub} className="navbar-logo" />
      <ul className="navbar-links">
        <li className="navbar-link"><a className="active" href="">Início</a></li>
        <li className="navbar-link"><a className="" href="">Cursos</a></li>
        <li className="navbar-link"><a className="" href="">Cases</a></li>
        <li className="navbar-link"><a className="" href="">Masterclass</a></li>
      </ul>
    </section>
  )
};

export default Navbar;

import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <Link className="navbar-brand" href="#">
        <span className="text-white text-weigth-bold">Eventos</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item active " to="/">
            Home
          </Link>
          <Link className="nav-item active " to="/novousuario">
            Cadastrar
          </Link>
          <Link className="nav-item active " to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

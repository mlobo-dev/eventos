import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
  const dispatch = useDispatch();
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

          {useSelector((state) => state.usuarioLogado) ? (
            <>
              <Link className="nav-item active " to="/">
                Publicar Evento
              </Link>
              <Link className="nav-item active " to="/">
                Meus Eventos
              </Link>

              <Link
                className="nav-item active "
                to="/login"
                onClick={() => dispatch({ type: 'LOG_OUT' })}
              >
                Sair
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-item active " to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

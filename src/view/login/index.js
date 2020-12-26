import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setMsgTipo('sucesso');
      })
      .catch((error) => {
        setMsgTipo('erro');
      });
  }

  return (
    <div className="login-content  d-flex  align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Login
          </h1>
        </div>

        <input
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Email address"
          required
          autofocus
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Password"
          required
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          className="btn btn-lg btn-block btn-login"
          type="button"
          onClick={logar}
        >
          Login
        </button>

        <div className="msg-login text-white text-center my-5">
          {msgTipo === 'sucesso' && (
            <span>
              <strong>Wow!</strong> Você está conectado &#128526;
            </span>
          )}

          {msgTipo === 'erro' && (
            <span>
              <strong>Ops!</strong> Usuário ou senha inválidos &#128546;
            </span>
          )}
        </div>

        <div className="opcoes-login mt-5 text-center">
          <a href="#" className="mx-2">
            Recuperar a senha
          </a>
          <label className="text-white">&#9733;</label>
          <Link to="novousuario" className="mx-2">
            Quero me cadastrar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

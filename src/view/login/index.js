import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [carregando, setCarregando] = useState(false);
  const dispatch = useDispatch();

  function logar() {
    setCarregando(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setMsgTipo('sucesso');
        setTimeout(() => {
          dispatch({ type: 'LOG_IN', usuarioEmail: email });
        }, 2000);

        setCarregando(false);
      })
      .catch((error) => {
        setMsgTipo('erro');
        setCarregando(false);
      });
  }

  return (
    <>
      {useSelector((state) => state.usuarioLogado) && <Redirect to="/" />}
      <div className="login-content  d-flex  align-items-center">
        <form className="form-signin mx-auto">
          <div className="text-center mb-4">
            <i class="fas fa-glass-cheers text-white fa-5x"></i>
          </div>

          <input
            type="email"
            id="inputEmail"
            className="form-control my-2"
            placeholder="Email address"
            autofocus
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="inputPassword"
            className="form-control my-2"
            placeholder="Password"
            onChange={(e) => setSenha(e.target.value)}
          />

          {carregando ? (
            <div class="spinner-border text-danger spinner" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <button
              className="btn btn-lg btn-block btn-login"
              type="button"
              onClick={logar}
            >
              Entrar
            </button>
          )}

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
            <Link to="/recuperarsenha" className="mx-2">
              Recuperar a senha
            </Link>
            <label className="text-white">&#9733;</label>
            <Link to="novousuario" className="mx-2">
              Quero me cadastrar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

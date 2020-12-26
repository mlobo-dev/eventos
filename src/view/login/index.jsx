import React from 'react';
import './login.css';
function Login() {
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
        />

        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Password"
        />

        <button className="btn btn-lg btn-block btn-login" type="submit">
          Sign in
        </button>

        <div className="msg-login text-white text-center my-5">
          <span>
            <strong>Wow!</strong> Você está conectado &#128526;
            <br />
            <strong>Ops!</strong> Usuário ou senha inválidos &#128546;
          </span>
        </div>

        <div className="opcoes-login mt-5 text-center">
          <a href="#" className="mx-2">
            Recuperar a senha
          </a>
          <label className="text-white">&#9733;</label>
          <a href="#" className="mx-2">
            Quero me cadastrar
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;

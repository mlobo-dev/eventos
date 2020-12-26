import React, { useState } from 'react';
import './usuario-novo.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function NovoUsuario() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();
  const [carregando, setCarregando] = useState(false);

  function cadastrar() {
    setCarregando(true);

    setMsgTipo(null);
    if (!email || !senha) {
      setMsgTipo('erro');
      setMsg('Você precisa informar o email e senha para fazer o cadastro!');
      setCarregando(false);
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((response) => {
        setMsgTipo('sucesso');
        setCarregando(false);
      })
      .catch((erro) => {
        setMsgTipo('erro');
        console.table(erro);
        setMsg(erro.message);
        setCarregando(false);
      });
  }

  return (
    <div className="form-cadastro">
      <form className="text-center form-login mx-auto mt-5">
        <h1 className="h3 mb-3 text-black font-weigth-bold">Cadastro</h1>

        <input
          type="email"
          className="form-control my-2"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control my-2"
          placeholder="Email"
          required
          onChange={(e) => setSenha(e.target.value)}
        />

        {carregando ? (
          <div class="spinner-border text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <button
            type="button"
            className="btn  btn-lg  btn-block  mt-3  mb-5  btn-cadastrar"
            onClick={cadastrar}
          >
            Cadastrar
          </button>
        )}

        <div className="msg-login text-black text-center my-5">
          {msgTipo === 'sucesso' && (
            <span>
              <strong>Wow!</strong> Usuário cadastrado com sucesso! &#128526;
            </span>
          )}

          {msgTipo === 'erro' && (
            <span>
              <strong>Ops! </strong>
              {msg} &#128546;
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default NovoUsuario;

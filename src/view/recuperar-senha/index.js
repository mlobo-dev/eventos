import React, { useState } from 'react';
import './recuperar-senha.css';

import firebase from '../../config/firebase';
import 'firebase/auth';
import Navbar from '../../components/navbar';
function RecuperarSenha() {
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  function recuperarSenha() {
    setMsg('');
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setMsg('Enviamos um link no seu email para redefinir sua senha.');
      })
      .catch((error) => {
        setMsg(error.message);
      });
  }
  return (
    <>
      <Navbar />

      <form className="text-center  form-login mx-auto  mt-5">
        <h3 className="font-weight-bold mb-3">Recuperar Senha</h3>
        <input
          type="email"
          className="form-control  my-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {msg && (
          <div className="msg my-4">
            <span>{msg}</span>
          </div>
        )}

        <button
          type="button"
          className="btn btn-lg btn-block btn-enviar"
          onClick={recuperarSenha}
        >
          Enviar Solicitação
        </button>
      </form>
    </>
  );
}
export default RecuperarSenha;

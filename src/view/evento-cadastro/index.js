import React, { useState } from 'react';
import './evento-cadastro.css';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar';

function EventoCadastro() {
  const [msgTipo, setMsgTipo] = useState('sucesso');
  return (
    <>
      {!useSelector((state) => state.usuarioLogado) && <Redirect to="/login" />}
      <Navbar />
      <div className="col-12 mt-2">
        <div className="row">
          <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
        </div>
        <form>
          <div className="form-group">
            <label>Titulo:</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Tipo:</label>
            <select className="form-control">
              <option disabled selected>
                Selecione um tipo
              </option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
            </select>
          </div>
          <div className="form-group">
            <label>Descrição:</label>
            <textarea className="form-control" rows="3" />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Data:</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-6">
              <label>Hora:</label>
              <input type="time" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label>Upload foto:</label>
            <input type="file" />
          </div>

          <button
            type="button"
            className="btn btn-lg btn-block mt-4 btn-cadastrar"
          >
            Publicar
          </button>
        </form>

        <div className="msg-login  text-center mt-4">
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
      </div>
    </>
  );
}

export default EventoCadastro;

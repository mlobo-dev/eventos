import React, { useState } from 'react';
import './evento-cadastro.css';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar';
import firebase from 'firebase';

function EventoCadastro() {
  const [msgTipo, setMsgTipo] = useState();
  const [titulo, setTitulo] = useState();
  const [tipo, setTipo] = useState();
  const [descricao, setDescricao] = useState();
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [foto, setFoto] = useState();
  const storage = firebase.storage();
  const database = firebase.firestore();
  const email = useSelector((state) => state.usuarioEmail);
  const [carregando, setCarregando] = useState(false);
  function cadastrar() {
    setCarregando(true);
    setMsgTipo(null);
    storage
      .ref(`images/${foto.name}`)
      .put(foto)
      .then(() => {
        database
          .collection('eventos')
          .add({
            titulo: titulo,
            tipo: tipo,
            descricao: descricao,
            data: data,
            hora: hora,
            usuarioEmail: email,
            foto: foto.name,
            publico: true,
            visualizacoes: 0,
            criacao: new Date(),
          })
          .then(() => {
            setMsgTipo('sucesso');
          })
          .catch((error) => {
            setMsgTipo('error');
          });
      })
      .catch((error) => {
        setMsgTipo('error');
      });
    setCarregando(false);
  }

  return (
    <>
      {!useSelector((state) => state.usuarioLogado) && <Redirect to="/login" />}
      <Navbar />
      <div className="container">
        <div className="col-12 mt-4 mx-auto">
          <div className="row">
            <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
          </div>
          <form>
            <div className="form-group">
              <label>Titulo:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Tipo:</label>
              <select
                className="form-control"
                onChange={(e) => setTipo(e.target.value)}
              >
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
              <textarea
                className="form-control"
                rows="3"
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>

            <div className="form-group row">
              <div className="col-6">
                <label>Data:</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label>Hora:</label>
                <input
                  type="time"
                  className="form-control"
                  onChange={(e) => setHora(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Upload foto:</label>
              <br />
              <input type="file" onChange={(e) => setFoto(e.target.files[0])} />
            </div>

            {carregando ? (
              <div class="spinner-border text-danger spinner" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-lg btn-block mt-5 btn-cadastrar"
                onClick={cadastrar}
              >
                Publicar
              </button>
            )}
          </form>

          <div className="msg-login  text-center mt-4">
            {msgTipo === 'sucesso' && (
              <span>
                <strong>Wow!</strong>Cadastrado com Sucesso!&#128526;
              </span>
            )}

            {msgTipo === 'error' && (
              <span>
                <strong>Ops!</strong> Não foi possível realizar o cadastro
                &#128546;
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventoCadastro;

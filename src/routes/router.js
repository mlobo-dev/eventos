import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// PAGES
import Login from '../view/login';
import NovoUsuario from '../view/usuario-novo';
import Home from '../view/home';
import RecuperarSenha from '../view/recuperar-senha';

function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/novousuario" component={NovoUsuario} />
      <Route exact path="/recuperarsenha" component={RecuperarSenha} />
    </BrowserRouter>
  );
}
export default Router;

import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar';

function Home() {
  return (
    <>
      <Navbar />
      <h1>{useSelector((state) => state.usuarioEmail)}</h1>
    </>
  );
}
export default Home;

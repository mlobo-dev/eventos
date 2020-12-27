import React from 'react';
import './home.css';
import { useSelector } from 'react-redux';
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

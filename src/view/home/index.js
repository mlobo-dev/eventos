import React from 'react';
import './home.css';
import Navbar from '../../components/navbar';
import CardEvento from '../../components/evento-card';
function Home() {
  return (
    <>
      <Navbar />
      <div className="row">
        <CardEvento />
      </div>
    </>
  );
}
export default Home;

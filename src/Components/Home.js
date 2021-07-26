import React from "react";
import { Link } from 'react-router-dom';

import "../Styles/Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home_box">
        <h2 className="home_box-title">Selecione o tipo de cadastro:</h2>
        <div className="home_box-buttons">
          <Link to="/produtos">Produtos</Link>
          <Link to="/clientes">Clientes</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

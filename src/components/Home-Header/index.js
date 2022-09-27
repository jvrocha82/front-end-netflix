import React from "react";
import "./styles.css";
import logo from "../../midia/Netflix_logo.svg.png";

import { Link } from "react-router-dom";
let header = ({ black, profileSelected,path }) => {
  return (
    <header className="homeHeader">
      <div className="homeHeader--logo">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <div className="homeHeader--user">
        <select className="homeHeader--language">
          <option value="portugues">Português</option>
          <option value="english">english</option>
        </select>

        <Link className="homeHeader--linkLogin" to={`/${path}`}>
          Entrar
        </Link>
      </div>
    </header>
  );
};
export default header;

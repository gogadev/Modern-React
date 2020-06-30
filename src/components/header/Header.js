import React from "react";

import letterR from "../../assets/letter_r.png";
import letterM from "../../assets/letter_m.gif";

import logo from "../../assets/logo.jpg";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <div className="title">
        <span>
          <img className="letter m" src={letterM} alt="" />
        </span>
        <span className="span">odern</span>{" "}
        <span>
          <img className="letter r" src={letterR} alt="" />
        </span>
        eact
      </div>
      <img id="logo" src={logo} alt="" />
    </header>
  );
};

export default Header;

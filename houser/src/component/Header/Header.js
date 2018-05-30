import React from "react";
import "./Header.css";
import logo from "../../assets/houser_logo.png";

export default function Header() {
  return (
    <div className="header-box">
      <img className="header-img" src={logo} alt="logo" />
      <h1 className="header-txt"> Houser</h1>
    </div>
  );
}

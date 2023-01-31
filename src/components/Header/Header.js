import React from "react";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="header">
      <span className="logo-containner">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>VSCHUSTER</h2>
      </span>
      <span className="buttons-containner">
        <Button text="Contato" />
        {pathname.length === 1 ? (
          <Button
            text="Acessar"
            variant="fill"
            onClick={() => navigate("/cursos")}
          />
        ) : (
          <Button text="Sair" variant="fill" onClick={() => navigate("/")} />
        )}
      </span>
    </div>
  );
};

export default Header;

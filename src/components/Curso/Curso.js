import React from "react";
import "./Curso.css";

const Curso = ({ text, onClick }) => {
  return (
    <div className="curso" onClick={onClick}>
      <h1>{text[0]}</h1>
      <p className="subtitle">{text}</p>
      <span>
        <div>
          <p>Disciplinas</p>
          <p>15</p>
        </div>
        <div className="vertical-line"></div>
        <div>
          <p>Pendências</p>
          <p>0</p>
        </div>
      </span>
      <div className="bottom-block">
        <p>Matrículas: 133</p>
        <p>Professores: 5</p>
      </div>
    </div>
  );
};

export default Curso;

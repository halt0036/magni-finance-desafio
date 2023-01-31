import React from "react";
import "./Turma.css";

const Turma = ({ text, onClick }) => {
  return (
    <div className="turma" onClick={onClick}>
      <p className="subtitle">Turma</p>
      <h1>{text}</h1>
      <span>
        <div>
          <p>Semestre</p>
          <p>1</p>
        </div>
        <div className="vertical-line"></div>
        <div>
          <p>Pendências</p>
          <p>0</p>
        </div>
      </span>
      <div className="bottom-block">
        <p>Matrículas: 30</p>
        <p>Professores: 5</p>
      </div>
    </div>
  );
};

export default Turma;

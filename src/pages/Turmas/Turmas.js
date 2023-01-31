import React, { useContext } from "react";
import applicationContext from "../../context/applicationContext";
import "./Turmas.css";
import { useNavigate, useLocation } from "react-router-dom";
import Turma from "../../components/Turma/Turma";

const Turmas = () => {
  const { data } = useContext(applicationContext);
  const navigate = useNavigate();

  return (
    <div className="turmas">
      {data.turmas?.map((turma) => (
        <Turma
          text={turma.id}
          key={"turma" + turma.id}
          onClick={() => navigate("/:" + turma.id)}
        />
      ))}
    </div>
  );
};

export default Turmas;

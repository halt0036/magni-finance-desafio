import React, { useContext } from "react";
import Curso from "../../components/Curso/Curso";
import applicationContext from "../../context/applicationContext";
import "./Cursos.css";
import { useNavigate, useLocation } from "react-router-dom";

const Cursos = () => {
  const { data } = useContext(applicationContext);
  const navigate = useNavigate();

  return (
    <div className="cursos">
      {data.cursos?.map((curso) => (
        <Curso
          key={"curso" + curso.id}
          text={curso.nome}
          onClick={() => navigate("/turmas")}
        />
      ))}
    </div>
  );
};

export default Cursos;

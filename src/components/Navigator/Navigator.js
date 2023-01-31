import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navigator.css";
import { Dropdown, Space } from "antd";
import { Select } from "antd";
import applicationContext from "../../context/applicationContext";

const Navigator = () => {
  const { pathname } = useLocation();
  const { data, currentTurma, setCurrentTurma } =
    useContext(applicationContext);

  const changeCurso = (newValue) => {
    setCurrentTurma({ curso: newValue });
  };
  const changeSemestre = (newValue) => {
    setCurrentTurma((prevState) => ({ ...prevState, semestre: newValue }));
  };
  const changeDisciplina = (newValue) => {
    setCurrentTurma((prevState) => ({ ...prevState, disciplina: newValue }));
  };
  const changeTurma = (newValue) => {
    setCurrentTurma((prevState) => ({ ...prevState, turma: newValue }));
  };

  return (
    <div className="navigator">
      {pathname.length !== 1 && (
        <div className="navigator-filters">
          <Select
            defaultActiveFirstOption={false}
            placeholder="Curso"
            bordered={true}
            showArrow={true}
            className="select"
            allowClear
            onChange={changeCurso}
            notFoundContent={null}
            options={(data.cursos || []).map((c) => ({
              value: c.id,
              label: c.nome,
            }))}
          />
          {currentTurma.curso && (
            <Select
              defaultActiveFirstOption={false}
              placeholder="Semestre"
              bordered={true}
              showArrow={true}
              className="select"
              allowClear
              onChange={changeSemestre}
              notFoundContent={null}
              options={([1] || []).map((s) => ({
                value: s,
                label: s,
              }))}
            />
          )}
          {currentTurma.semestre && (
            <Select
              defaultActiveFirstOption={false}
              placeholder="Disciplina"
              bordered={true}
              showArrow={true}
              className="select"
              allowClear
              onChange={changeDisciplina}
              notFoundContent={null}
              options={(data.diciplinas || []).map((d) => ({
                value: d.id,
                label: d.nome,
              }))}
            />
          )}

          {currentTurma.disciplina && (
            <Select
              defaultActiveFirstOption={false}
              placeholder="Turma"
              bordered={true}
              showArrow={true}
              className="select"
              allowClear
              onChange={changeTurma}
              notFoundContent={null}
              options={(data.turmas || []).map((d) => ({
                value: d.id,
                label: d.id,
              }))}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Navigator;

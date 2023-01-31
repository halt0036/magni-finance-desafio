import React, { useContext, useState } from "react";
import applicationContext from "../../context/applicationContext";
import "./SelectedTurma.css";
import { useNavigate, useParams } from "react-router-dom";
import { Space, Table, Drawer, Form, Input } from "antd";

const SelectedTurma = () => {
  const { data, setData } = useContext(applicationContext);
  const navigate = useNavigate();
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [currentAluno, setCurrentAluno] = useState("");

  const showDrawer = (val) => {
    setCurrentAluno(val);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const changeAluno = (val, type) => {
    // altera state
  };

  const alunosColumns = [
    {
      title: "Matrícula",
      dataIndex: "matricula",
      key: "matricula",
    },
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Nascimento",
      dataIndex: "nascimento",
      key: "nascimento",
    },
    {
      title: "Média",
      dataIndex: "media",
      key: "media",
    },
    {
      title: "Ações",
      key: "nome",
      render: (val) => (
        <Space size="middle">
          <a onClick={() => showDrawer(val)}>Editar</a>
        </Space>
      ),
    },
  ];

  const profsColumns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Nascimento",
      dataIndex: "nascimento",
      key: "nascimento",
    },
    {
      title: "Salário",
      dataIndex: "salario",
      key: "salario",
    },
    {
      title: "Ações",
      key: "nome",
      render: (val) => (
        <Space size="middle">
          <a>Editar</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="selected-turma">
      <Table
        title={() => "Alunos"}
        bordered
        size="middle"
        className="tbl-alunos"
        dataSource={data.alunos?.filter((aluno) =>
          data.turmas
            .filter(
              (turma) => turma.id.toString() === id.replace(":", "").toString()
            )[0]
            .alunos.includes(aluno.nome)
        )}
        columns={alunosColumns}
      />
      <Table
        title={() => "Professores"}
        size="middle"
        bordered
        className="tbl-alunos"
        dataSource={data.professores}
        columns={profsColumns}
      />
      <Drawer
        title={
          "Aluno(a): " + currentAluno.nome + " " + currentAluno.matricula || ""
        }
        placement={"bottom"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Form
          className="form"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="vertical"
          size={"middle"}
        >
          <Form.Item label="Nome">
            <Input />
          </Form.Item>
          <Form.Item label="Data de Nascimento">
            <Input />
          </Form.Item>
          <Form.Item label="Média">
            <Input type="number" />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default SelectedTurma;

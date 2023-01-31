import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cursos from "./pages/Cursos/Cursos";
import GlobalContext from "./context";
import Navigator from "./components/Navigator/Navigator";
import Turmas from "./pages/Turmas/Turmas";
import SelectedTurma from "./pages/SelectedTurma/SelectedTurma";

function App() {
  return (
    <div className="app">
      <GlobalContext>
        <BrowserRouter>
          <Header />
          <Navigator />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/turmas" element={<Turmas />} />
            <Route path="/:id" element={<SelectedTurma />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </div>
  );
}

export default App;

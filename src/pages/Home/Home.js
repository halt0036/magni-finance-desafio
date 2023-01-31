import React from "react";
import homeBackground from "../../assets/home_background.png";
import Button from "../../components/Button/Button";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-title">
        <h1>
          VS
          <br />
          MANAGER
        </h1>
        <span className="home-buttons">
          <Button text="Contato" />
          <Button
            text="Acessar"
            variant="fill"
            onClick={() => navigate("/cursos")}
          />
        </span>
      </div>
      <img src={homeBackground} className="app-homeBackground" alt="app" />
    </div>
  );
};

export default Home;

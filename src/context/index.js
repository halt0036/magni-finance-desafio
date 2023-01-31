import React, { useEffect, useState } from "react";
import ApplicationContext from "./applicationContext";
import fakeData from "./data.json";

const GlobalContext = ({ children }) => {
  const [data, setData] = useState({});
  const [currentTurma, setCurrentTurma] = useState({});

  const fetchData = () => {
    setData(fakeData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        data,
        currentTurma,
        setData,
        setCurrentTurma,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default GlobalContext;

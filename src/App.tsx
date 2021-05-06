/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Controll } from "./components/ControlComponent";
import { Info } from "./components/InfoComponent";
import { Square } from "./components/SquareComponent";
import { fetchState } from "./redux/action/stateAction";
import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchState());
  }, []);

  return (
    <div className="App">
      <Controll />
      <Square />
      <Info />
    </div>
  );
};

export default App;

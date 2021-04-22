import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Controll } from "./components/ControlComponent";
import { Info } from "./components/InfoComponent";
import { Square } from "./components/SquareComponent";
import { fetchState } from "./Redux/action/stateAction";
import "./App.scss";

function App() {
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
}

export default App;

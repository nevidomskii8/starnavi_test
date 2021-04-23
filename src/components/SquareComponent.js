import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStateSelect, setHover } from "../Redux/reducer/stateReducer";

export const Square = () => {
  const stateSquare = useSelector(getStateSelect);
  const dispatch = useDispatch();
  const [square, setSquare] = useState([]);

  const classSquare =
    stateSquare === "5"
      ? "easy"
      : stateSquare === "10"
      ? "medium"
      : stateSquare === "15"
      ? "hard"
      : "easy";

  useEffect(() => {
    const array = new Array(+stateSquare).fill(0);
    setSquare(array);
  }, [stateSquare]);

  const handleHover = (e, string) => {
    dispatch(setHover(string));
    e.target.classList.contains("blue")
      ? e.target.classList.remove("blue")
      : e.target.classList.add("blue");
  };

  return (
    <div className="App__square">
      {stateSquare && (
        <div className="App__square__container">
          {square.map((_row, index) => (
            <div key={index} className={`row ${index + 1}`}>
              {square.map((_col, i) => (
                <div
                  key={i}
                  onMouseEnter={(e) =>
                    handleHover(e, `row ${index + 1} col ${i + 1}`)
                  }
                  className={`col ${i + 1} ${classSquare} ${
                    Math.floor(Math.random() * 5) % 2 === 0 ? "blue" : ""
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { getStateHovers } from "../Redux/selector/stateSelector";

export const Info = () => {
  const hovers = useSelector(getStateHovers);

  return (
    <div className="App__info">
      <div className="App__info__container">
        {hovers?.map((hover, i) => (
          <div key={i}>
            {" "}
            <span>{hover}</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

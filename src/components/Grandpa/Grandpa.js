import "./Grandpa.css";

import React from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

const Grandpa = () => {
  const house = 7;
  return (
    <div className="grandpa">
      <h1>Grandpa</h1>
      <section style={{ display: "flex" }}>
        <Father house={house}></Father>
        <Uncle house={house}></Uncle>
        <Aunty house={house}></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;

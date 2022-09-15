import "./Grandpa.css";

import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

/*
 * context API
 * 1. call createContext with a default value.
 * 2. set a variable of the context with uppercase
 * 3. make sure you export the context to use it in other places.
 * 4. Wrap your child content using RingContext.Provider
 * 5. Provide a value
 * 6. to consume the context from child component.
 * 7. useContext hook and you will need to pass the contextName.
 * 8. Make sure you take notes.
 */

export const RingContext = createContext("Diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const Ornament = "Diamond Ring";
  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h1>Grandpa</h1>
        <p>
          House: {house} <button onClick={handleBuyAHouse}>Buy a house</button>
        </p>
        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;

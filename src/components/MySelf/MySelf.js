import "./MySelf.css";

import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house, ornament }) => {
  return (
    <div className="myself">
      <h3>Myself Mehedi Hasan Himel.</h3>
      <p>House: {house}</p>
      <Special></Special>
    </div>
  );
};

export default MySelf;

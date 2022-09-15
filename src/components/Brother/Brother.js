import "./Brother.css";

import React from "react";

const Brother = ({ house }) => {
  return (
    <div className="brother">
      <h3>Brother</h3>
      <p>House: {house}</p>
    </div>
  );
};

export default Brother;

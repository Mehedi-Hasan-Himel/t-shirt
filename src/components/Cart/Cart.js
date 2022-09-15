import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
// conditional rendering options
// 1. Elements Variable.
// 2. Ternary operator.
// 3. && operator. (shorthand)
// 4. || or operator. 
  let command;
  if (cart.length === 0) {
    command = <p>Please add at least one item</p>;
  } else if (cart.length === 1) {
    command = <p>Please add more item...</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding item.</small>
      </p>
    );
  }

  // 2.

  return (
    <div>
      <h2>Item selected : {cart.length}</h2>
      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
        
        {cart.length === 0 || <p className="orange">Yea..!!! You are buying !</p>}

        {cart.length === 3 && <div className="orange">
           <h3>Trigonal</h3>
           <p>Tin jon ke ki gift diba?</p>
        </div>}

        {command}

        {cart.length !== 4 ? <p>Keep Adding</p> : <button>Clear All</button>}

        {cart.length === 4 && <button className="orange">Review Order</button>}

    </div>
  );
};

export default Cart;

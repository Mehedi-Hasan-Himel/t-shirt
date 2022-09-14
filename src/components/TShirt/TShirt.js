import React from 'react';

const TShirt = (props) => {
   const {name,picture,price} =  props.tShirts
   return (
      <div>
         <img src={picture} alt="" />
         <h4>Name: {name}</h4>
         <p>Price: ${price}</p>
      </div>
   );
};

export default TShirt;
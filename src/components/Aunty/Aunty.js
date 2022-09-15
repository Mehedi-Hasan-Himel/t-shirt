import './Aunty.css'

import React from 'react';

const Aunty = ({house}) => {
   return (
      <div className='aunty'>
         <h2>Aunty</h2>
         <p>House: {house}</p>
      </div>
   );
};

export default Aunty;
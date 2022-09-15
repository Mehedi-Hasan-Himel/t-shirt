import './Uncle.css'

import React from 'react';

const Uncle = ({house}) => {
   return (
      <div className='uncle'>
         <h2>Uncle</h2>
         <p>House: {house}</p>
      </div>
   );
};

export default Uncle;
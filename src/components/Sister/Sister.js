import './Sister.css'

import React from 'react';

const Sister = ({house}) => {
   return (
      <div className='sister'>
         <h3>Sister</h3>
         <p>House: {house}</p>
      </div>
   );
};

export default Sister;
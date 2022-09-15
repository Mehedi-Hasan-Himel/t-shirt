import './MySelf.css'

import React from 'react';

const MySelf = ({house}) => {
   return (
      <div className='myself'>
         <h3>Myself Mehedi Hasan Himel.</h3>
         <p>House: {house}</p>
      </div>
   );
};

export default MySelf;
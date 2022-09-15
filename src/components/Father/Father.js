import './Father.css'

import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({house, ornament}) => {
   return (
      <div className='father'>
         <h2>Father </h2>
         <p>House: {house}</p>
         <MySelf  house={house}></MySelf>
         <Brother house={house}></Brother>
         <Sister  house={house}></Sister>
      </div>
   );
};

export default Father;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
   return (
      <div>
         <h2>Welcome to T-Shirt Hub</h2>
         <nav>
            <Link to='/home'>Home</Link>
            <Link to='/order-review'>Order Review</Link>
            <Link to='/grandpa'>Grandpa</Link>
            <Link to='/father'>Father</Link>
            <Link to='/uncle'>Uncle</Link>
            <Link to='/aunty'>Aunty</Link>
            <Link to='/myself'>Myself</Link>
            <Link to='/brother'>Brother</Link>
            <Link to='/sister'>Sister</Link>
         </nav>
      </div>
   );
};

export default Header;
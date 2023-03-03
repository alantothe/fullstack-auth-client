import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/auth';


const NavBar = () => {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/registration">Register</Link></li>
      </ul>
      {auth.userEmail && <h3>Current User: {auth.userEmail}</h3>}

      <button onClick={auth.logout}>Logout</button>
    </nav>
  );
};

export default NavBar;


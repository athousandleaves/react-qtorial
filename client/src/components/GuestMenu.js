import React from 'react';
import { Link } from 'react-router-dom';

const GuestMenu = ({props}) => (
    <div className="header">
      <a href="/" className="logoLink">
        <h1 className="logo">Qtorial</h1>
      </a>
      <div className="nav">
        <Link to={`/login`} className="signIn">
          Sign In
        </Link>
        <Link to={`/register`} className="register">
          Register
        </Link>
      </div>
    </div>
  )

export default GuestMenu;

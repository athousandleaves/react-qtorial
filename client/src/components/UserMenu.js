import React from 'react';
import {Link} from 'react-router-dom';

const UserMenu = props => (
    <div className="header">
      <a href="/" className="logoLink">
        <h1 className="logo">Qtorial</h1>
      </a>
      <div className="authNav">
        <Link to={`/user/${props.id}`} className="signIn">
          Logged in as <strong>{props.username}</strong>
        </Link>
        <Link to={`/tutorials/post`} className="postNewTutorial">
          Post New Tutorial
        </Link>
        <Link to={`/logout`} className="logout">
          Log Out
        </Link>
      </div>
    </div>
  )

export default UserMenu;
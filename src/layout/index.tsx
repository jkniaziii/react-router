import React from 'react'
import { Link } from 'react-router-dom';

const Layout = ()=> {
  return (
    <div>
        <nav style={{display: 'flex', gap: 20}}>
          <Link to="/profile">Profile</Link>
          <Link to="/à-è-ì-ò-ù" state={{ name: "Kyle" }}>Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/api">Api</Link>
          <Link to="/admin">Admin</Link>

      </nav>
    </div>
  )
}

export default Layout;

import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const ProfileLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/profile/1">User 1</Link></li>
          <li><Link to="/profile/2">User 2</Link></li>
          <li><Link to="/profile/new">New User</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default ProfileLayout;
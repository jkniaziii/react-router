import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Profile = ()=> {
    const menu = ['id', 'new']
    
    return (
        <Fragment>
        <div>menu</div>
        <div>{new Date().toISOString()}</div>
        {menu.map((item: string)=>(<Link to={item}>{item}</Link>))}
    </Fragment>
  )
}

export default Profile;

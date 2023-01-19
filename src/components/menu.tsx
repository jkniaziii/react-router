import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    const menu = ['setting', 'updates', 'more']
    return (
        <Fragment>
            <div>menu</div>
            {menu.map((item: string)=>(<Link to={item}>{item}</Link>))}
        </Fragment>
    )
}

export default Menu;

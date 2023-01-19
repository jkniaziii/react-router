import React from 'react'
import { useParams } from 'react-router-dom';

const Submenu = () => {
    const { id } = useParams()

    return (
        <div>menu: {id}</div>
    )
}

export default Submenu;

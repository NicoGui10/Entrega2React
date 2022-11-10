import React from 'react'
import logotest from '../../img/logotest.jpg'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>



            <Link to="/Inicio">
                <div className='logo'>
                    <img src={logotest} alt="" width='150px' />

                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/Productos">PRODUCTOS</Link>
                </li>
                
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>



            </div>



        </header>
    )
}

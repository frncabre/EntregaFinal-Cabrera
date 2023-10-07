import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Mi Tienda</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#">Celulares</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Tablets</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Notebooks</a>
                </li>
            </ul>
            <div className="navbar-nav ml-auto">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar
import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink to='/' className="navbar-brand">Inicio</NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to='/category/nike' className="nav-link">Nike</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/category/adidas' className="nav-link">Adidas</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='/category/newbalance' className="nav-link">New Balance</NavLink>
                </li>
            </ul>
            <div className="navbar-nav ml-auto">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar
import React from 'react'

import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className="nav">
        <nav className="navBox">
          <ul className="nav__list">
            <li className="nav__el">
              <Link rel="stylesheet" to='/' className="nav__a" > La découverte </Link>
            </li>
            <li className="nav__el">
              <Link rel="stylesheet" href="#" className="nav__a" > Les Styles </Link>
            </li>
            <li className="nav__el">
              <Link rel="stylesheet" to="/ton-aventure" className="nav__a" > Mon aventure </Link>
            </li>
          </ul>
        </nav>
        <div className="nav__boxLogo">
          <p className="nav__logo">
            TattooExplore
          </p>
        </div>
      </div>
  )
}

export default NavBar
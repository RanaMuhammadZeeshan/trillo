import React from 'react'
import { Link } from 'react-router-dom'

import sprite from '../../assets/svg/sprite.svg'

const Sidebar = () => {
  const navLinks = [
    {
      name: 'Hotel',
      icon: 'icon-home',
    },

    {
      name: 'Flight',
      icon: 'icon-aircraft-take-off',
    },
    {
      name: 'Car rental',
      icon: 'icon-key',
    },
    {
      name: 'Tours',
      icon: 'icon-map',
    },
  ]

  const navLinkRender = () => (
    <ul className="side-nav">
      {navLinks.map((link, index) => (
        <li
          key={index}
          className={`side-nav__item ${
            index === 0 ? 'side-nav__item--active' : ''
          } `}
        >
          <Link to={'#'} className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${sprite}#${link.icon}`}></use>
            </svg>
            <span>{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <nav className="sidebar">
      {navLinkRender()}
      <div className="legal">
        &copy; 2022 by trillo. All rights reserved by Zeeshan.
      </div>
    </nav>
  )
}

export default Sidebar

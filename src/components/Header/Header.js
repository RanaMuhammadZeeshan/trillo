import React from 'react'

import logoImage from '../../assets/img/logo.png'
import sprite from '../../assets/svg/sprite.svg'
import userLogin from '../../assets/img/xee.jpg'

const Header = () => {
  return (
    <header className="header">
      <img src={logoImage} alt="trillo logo" className="logo" />

      <form action="#" className="search">
        <input type={'text'} placeholder="search" className="search__input" />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={`${sprite}#icon-bookmark`}></use>
          </svg>
          <span className="user-nav__notification">7</span>
        </div>

        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={`${sprite}#icon-chat`}></use>
          </svg>
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img src={userLogin} alt="" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Zeeshan</span>
        </div>
      </nav>
    </header>
  )
}

export default Header

import React from 'react'

import sprite from '../../assets/svg/sprite.svg'
import Ratings from '../Ratings/Ratings'
import RatingValue from '../Ratings/RatingValue'

const Overview = () => {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>

      <div className="overview__stars">
        <Ratings />
      </div>

      <div className="overview__location">
        <svg className="overview__icon-location">
          <use xlinkHref={`${sprite}#icon-location-pin`}></use>
        </svg>
        <button className="btn-inline">Islamabad, Pakistan</button>
      </div>

      <div className="overview__rating">
        <RatingValue />
      </div>
    </div>
  )
}

export default Overview

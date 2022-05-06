import React, { useState } from 'react'

import sprite from '../../assets/svg/sprite.svg'

const Ratings = () => {
  const ratings = 3

  const renderRatingStars = (rating) => {
    let content = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        content.push(
          <svg className="overview__icon-star" key={i}>
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
        )
      } else {
        content.push(
          <svg className="overview__icon-star" key={i}>
            <use xlinkHref={`${sprite}#icon-star-outlined`}></use>
          </svg>
        )
      }
    }
    return content
  }

  return <React.Fragment>{renderRatingStars(ratings)}</React.Fragment>
}

export default Ratings

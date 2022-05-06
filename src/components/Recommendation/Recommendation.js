import React from 'react'
import RecommendedFriends from './RecommendedFriends'

const Recommendation = () => {
  return (
    <div className="recommend">
      <p className="recommend__count">
        Lucy and 3 other friends recommend this hotel
      </p>
      <RecommendedFriends />
    </div>
  )
}

export default Recommendation

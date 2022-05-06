import React from 'react'

import recommendedFriendImage1 from '../../assets/img/user-1.jpg'
import recommendedFriendImage2 from '../../assets/img/user-2.jpg'
import recommendedFriendImage3 from '../../assets/img/user-3.jpg'
import recommendedFriendImage4 from '../../assets/img/user-4.jpg'

const RecommendedFriends = () => {
  const RecommendedFriendsImages = [
    recommendedFriendImage1,
    recommendedFriendImage2,
    recommendedFriendImage3,
    recommendedFriendImage4,
  ]

  const renderRecommendedFriendsImages = () =>
    RecommendedFriendsImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={'recommended friend'}
        className="recommend__photo"
      />
    ))

  return (
    <div className="recommend__friends">{renderRecommendedFriendsImages()}</div>
  )
}

export default RecommendedFriends

import React from 'react'

const ReviewCard = ({
  reviewPhoto,
  reviewerName,
  reviewDate,
  reviewRating,
  reviewText,
}) => {
  return (
    <React.Fragment>
      <figure className="review">
        <blockquote className="review__text">{reviewText}</blockquote>
        <figcaption className="review__user">
          <img src={reviewPhoto} alt="review" className="review__photo" />
          <div className="review__user-box">
            <p className="review__user-name">{reviewerName}</p>
            <p className="review__user-date">{reviewDate}</p>
          </div>
          <div className="review__rating">{reviewRating}</div>
        </figcaption>
      </figure>
    </React.Fragment>
  )
}

export default ReviewCard

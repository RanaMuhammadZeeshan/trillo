import React from 'react'

import hotel1 from '../../assets/img/hotel-1.jpg'
import hotel2 from '../../assets/img/hotel-2.jpg'
import hotel3 from '../../assets/img/hotel-3.jpg'

const Gallery = () => {
  const galleryImages = [hotel1, hotel2, hotel3]

  const renderGalleryImages = () =>
    galleryImages.map((image, index) => (
      <figure className="gallery__item" key={index}>
        <img src={image} alt="gallery view sample" className="gallery__photo" />
      </figure>
    ))

  return <div className="gallery">{renderGalleryImages()}</div>
}

export default Gallery

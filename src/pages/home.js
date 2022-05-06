import React from 'react'

import Gallery from '../components/Gallery/Gallery'
import Overview from '../components/Overview/Overview'
import Recommendation from '../components/Recommendation/Recommendation'
import ReviewCard from '../components/ReviewCard/ReviewCard'

import reviewOnePhoto from '../assets/img/user-1.jpg'
import reviewTwoPhoto from '../assets/img/user-6.jpg'

const Home = () => {
  const descriptionList = [
    'Close to beach',
    'Breakfast included',
    'Free airport shuttle',
    'Free wifi',
    'Air conditioning and heading',
    'Pets allowed',
    'we speak all languages',
    'Perfect for families',
  ]

  const renderDescriptionList = () => (
    <ul className="list">
      {descriptionList.map((list, index) => (
        <li key={index} className="list__item">
          {list}
        </li>
      ))}
    </ul>
  )

  return (
    <React.Fragment>
      <section className="section-gallery">
        <Gallery />
      </section>
      <section className="section-overview">
        <Overview />
      </section>
      <section className="section-detail">
        <div className="detail">
          <div className="description">
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              nisi dignissimos debitis ratione sapiente saepe. Accusantium
              cumque, quas, ut corporis incidunt deserunt quae architecto
              voluptate.
            </p>
            <p className="paragraph">
              Accusantium cumque, quas, ut corporis incidunt deserunt quae
              architecto voluptate delectus, inventore iure aliquid aliquam.
            </p>
            {renderDescriptionList()}

            <Recommendation />
          </div>

          <div className="user-reviews">
            <ReviewCard
              reviewPhoto={reviewOnePhoto}
              reviewerName="Smith Jonas"
              reviewDate="May 6, 2022"
              reviewRating="7.8"
              reviewText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex."
            />
            <ReviewCard
              reviewPhoto={reviewTwoPhoto}
              reviewerName="Alexa Smith"
              reviewDate="Jan 16, 2022"
              reviewRating="8"
              reviewText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi."
            />

            <bitton className="btn-inline">
              Show all <span>&rarr;</span>
            </bitton>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="cta">
          <h2 className="cta__book-now">
            Good news! We have 4 free rooms for your selected dates!
          </h2>
          <button className="btn">
            <span className="btn__visible">Book now</span>
            <span className="btn__invisible">Only 4 rooms left</span>
          </button>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home

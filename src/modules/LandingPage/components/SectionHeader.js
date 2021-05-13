import React, { useState } from 'react'
import { Carousel, CarouselItem, Jumbotron, Button } from 'reactstrap'
import YouTubeIframe from '../../../app/components/YouTubeIframe'

import { sliderData } from './sliderData'
import {
  carouselFadedFigure,
  dummyUser1,
  dummyUser2,
  dummyUser3,
  angleRight,
  ellipsisColumns,
} from '../../../assets/images'

const SectionHeader = (props) => {
  const { handleSignupToggle } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === sliderData.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? sliderData.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const slides = sliderData.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Jumbotron>
          <h1 className="display-3">{item.captionHeader}</h1>
          <p className="lead">{item.captionText}</p>
          <div className="lead jumbotron-buttons">
            <Button
              color="secondary"
              className="btn-with-icon"
              onClick={() => handleSignupToggle()}
            >
              Take a tour
              <img src={angleRight} alt="icon" />
            </Button>
            <Button color="primary" className="btn-with-icon" onClick={() => handleSignupToggle()}>
              Start Earning
              <img src={angleRight} alt="icon" />
            </Button>
          </div>
          <img className="jumbotron-illustration" src={carouselFadedFigure} alt="faded figure" />
        </Jumbotron>

        <div className="video-preview__container">
          <div className="video-preview">
            <YouTubeIframe width={450} height={200} embedId={'-bJM4BGtJ9Y'} />
          </div>
          <div className="video-preview__bottom">
            <div className="video-preview__bottom-avatars">
              <div className="video-preview__bottom-avatars__item">
                <img src={dummyUser1} alt="user avatar" />
              </div>
              <div className="video-preview__bottom-avatars__item">
                <img src={dummyUser2} alt="user avatar" />
              </div>
              <div className="video-preview__bottom-avatars__item">
                <img src={dummyUser3} alt="user avatar" />
              </div>
            </div>
            <div className="video-preview__bottom-text">
              Join over <span>4,000+</span> Content creators
            </div>
          </div>
        </div>

        <div className="carousel-controls">
          <i className="fas fa-arrow-left" onMouseDown={() => previous()}></i>
          <i className="fas fa-arrow-right" onMouseDown={() => next()}></i>
        </div>
      </CarouselItem>
    )
  })

  return (
    <div className="section-header__container" fluid="true">
      <div className="ellipsis-columns__top">
        <img src={ellipsisColumns} alt="ellipsis" />
        <img src={ellipsisColumns} alt="ellipsis" />
      </div>
      <div className="ellipsis-columns__bottom">
        <img src={ellipsisColumns} alt="ellipsis" />
        <img src={ellipsisColumns} alt="ellipsis" />
      </div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
      </Carousel>
    </div>
  )
}

export default SectionHeader

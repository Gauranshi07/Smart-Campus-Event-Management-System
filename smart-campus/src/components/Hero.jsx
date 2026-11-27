
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

import campusImage from '../assets/abes-campus.jpg'
import eventImage from '../assets/campus-event.jpg'
import libraryImage from '../assets/campus-library.jpg'

import './Hero.css'

const slides = [
  {
    image: campusImage,
    title: 'ABES Engineering College',
    description: 'Building brighter futures together.',
    label: 'ABESEC · GHAZIABAD'
  },
  {
    image: eventImage,
    title: 'Experience Campus Life',
    description: 'Discover events, celebrations and unforgettable memories.',
    label: 'CAMPUS · EVENTS'
  },
  {
    image: libraryImage,
    title: 'Learn. Connect. Grow.',
    description: 'Explore opportunities and find your community.',
    label: 'CAMPUS · COMMUNITY'
  }
]

function Hero() {
  const [index, setIndex] = useState(1)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Add first and last cloned slides for infinite looping
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0]
  ]

  const activeIndex =
    (index - 1 + slides.length) % slides.length

  // Automatic slider
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setIndex(current => current + 1)
    }, 3500)

    return () => clearInterval(interval)
  }, [isPaused])

  // Re-enable transition after resetting cloned slides
  useEffect(() => {
    if (!transitionEnabled) {
      const frame = requestAnimationFrame(() => {
        setTransitionEnabled(true)
      })

      return () => cancelAnimationFrame(frame)
    }
  }, [transitionEnabled])

  // Handle infinite loop
  const handleTransitionEnd = () => {
    if (index === extendedSlides.length - 1) {
      setTransitionEnabled(false)
      setIndex(1)
    } else if (index === 0) {
      setTransitionEnabled(false)
      setIndex(slides.length)
    }
  }

  const nextSlide = () => {
    if (index < extendedSlides.length - 1) {
      setIndex(current => current + 1)
    }
  }

  const prevSlide = () => {
    if (index > 0) {
      setIndex(current => current - 1)
    }
  }

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex + 1)
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="hero">

      {/* LEFT CONTENT */}

      <div className="hero-content">

        <div className="hero-eyebrow">
          <span className="eyebrow-line"></span>
          A BETTER WAY TO EXPERIENCE COLLEGE
        </div>

        <h1>
          Make your campus life
          <br />
          <span>more exciting.</span>
        </h1>

        <p className="hero-description">
          From discovering events to finding your community,
          explore the opportunities that make your college
          journey memorable.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => scrollToSection('events')}
          >
            Explore Events <ArrowRight size={16} />
          </button>

          <button
            className="secondary-btn"
            onClick={() => scrollToSection('clubs')}
          >
            Explore Clubs
          </button>

        </div>

        <div className="hero-note">
          A little more to discover. A lot more to experience.
        </div>

      </div>


      {/* RIGHT IMAGE CAROUSEL */}

      <div
        className="hero-visual campus-visual"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        <div className="campus-image-wrap">

          <div
            className="campus-slides"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: transitionEnabled
                ? 'transform 0.75s cubic-bezier(0.65, 0, 0.35, 1)'
                : 'none'
            }}
            onTransitionEnd={handleTransitionEnd}
          >

            {extendedSlides.map((slide, i) => (
              <div className="campus-slide" key={i}>

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="campus-photo"
                />

                <div className="campus-photo-overlay">

                  <span className="campus-image-label">
                    {slide.label}
                  </span>

                  <div className="campus-slide-caption">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Previous Button */}

          <button
            className="slider-arrow slider-prev"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Button */}

          <button
            className="slider-arrow slider-next"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          {/* Navigation Dots */}

          <div className="slider-dots">

            {slides.map((slide, i) => (
              <button
                key={i}
                className={`slider-dot ${
                  activeIndex === i ? 'active' : ''
                }`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}

          </div>

        </div>


        {/* IMAGE CAPTION */}

        <div className="campus-caption">

          <div>
            <span className="caption-kicker">
              A PLACE TO BEGIN
            </span>

            <h2>{slides[activeIndex].title}</h2>
          </div>

          <span className="caption-number">
            {String(activeIndex + 1).padStart(2, '0')}
            {' / '}
            {String(slides.length).padStart(2, '0')}
          </span>

        </div>

      </div>

    </section>
  )
}

export default Hero

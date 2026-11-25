
import { ArrowRight, CalendarDays } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          CAMPUS LIFE, ALL IN ONE PLACE
        </span>

        <h1>
          Make Your Campus
          <br />
          Life More <span>Exciting.</span>
        </h1>

        <p>
          Discover campus events, find communities that
          match your interests, and make the most of
          every opportunity your college has to offer.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Events <ArrowRight size={17} />
          </button>

          <button className="secondary-btn">
            Explore Clubs
          </button>
        </div>

        <div className="hero-note">
          <span></span>
          Everything happening on campus, in one place.
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-heading">
          <span>THE CAMPUS EXPERIENCE</span>
          <span>01 / 03</span>
        </div>

        <div className="visual-main">
          <CalendarDays size={34} strokeWidth={1.2} />

          <div className="visual-line"></div>

          <h2>
            More than
            <br />
            just classrooms.
          </h2>

          <p>
            Events, ideas, friendships and experiences
            that make college life memorable.
          </p>
        </div>

        <div className="visual-footer">
          <span>DISCOVER YOUR CAMPUS</span>
          <span>EST. FOR STUDENTS</span>
        </div>
      </div>
    </section>
  )
}

export default Hero

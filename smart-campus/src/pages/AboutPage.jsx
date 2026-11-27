
import { Link } from 'react-router-dom'

import {
  CalendarDays,
  Users,
  LayoutDashboard,
  UserRound,
  Target,
  Code2,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'

import './AboutPage.css'

function AboutPage() {
  return (
    <main className="about-page">
        <div className="about-back">
            <Link to="/">
            <ArrowLeft size={16} />
            Back to Home
            </Link>
        </div>

      <section className="about-hero">
        <span className="about-tag">GET TO KNOW US</span>

        <h1>
          More Than Just
          <br />
          <span>Campus Life.</span>
        </h1>

        <p>
          Bringing campus events, student communities and
          opportunities together through one simple digital
          platform.
        </p>
      </section>

      <section className="about-intro">
        <div className="about-section-label">
          <span>01</span>
          ABOUT SMARTCAMPUS
        </div>

        <div className="about-intro-content">
          <h2>
            Making every campus
            <span> experience count.</span>
          </h2>

          <p>
            SmartCampus is a student-focused Event & Club
            Management System designed to make campus life
            more organized and engaging. It provides a
            centralized interface where students can discover
            college events, explore communities and stay
            connected with campus activities.
          </p>
        </div>
      </section>

      <section className="about-features">
        <div className="about-section-label">
          <span>02</span>
          WHAT WE OFFER
        </div>

        <div className="about-features-grid">

          <div className="about-feature">
            <CalendarDays size={25} />
            <h3>Explore Events</h3>
            <p>
              Discover college events and explore their
              details through a simple interface.
            </p>
          </div>

          <div className="about-feature">
            <Users size={25} />
            <h3>Discover Clubs</h3>
            <p>
              Explore technical and non-technical clubs
              and find communities that match your interests.
            </p>
          </div>

          <div className="about-feature">
            <UserRound size={25} />
            <h3>Event Registration</h3>
            <p>
              Access event information and explore the
              registration interface.
            </p>
          </div>

          <div className="about-feature">
            <LayoutDashboard size={25} />
            <h3>Student Dashboard</h3>
            <p>
              A planned dashboard interface to bring
              student activities together.
            </p>
          </div>

        </div>
      </section>

      <section className="about-purpose">
        <div className="about-section-label">
          <span>03</span>
          OUR PURPOSE
        </div>

        <div className="purpose-content">
          <Target size={30} strokeWidth={1.5} />

          <h2>
            One campus.
            <br />
            Endless <span>possibilities.</span>
          </h2>

          <p>
            Our goal is to create a user-friendly digital
            experience that helps students discover
            opportunities, participate in activities and
            feel more connected to their campus.
          </p>
        </div>
      </section>

      <section className="about-project">
        <div className="about-section-label">
          <span>04</span>
          PROJECT INFORMATION
        </div>

        <div className="project-info">
          <div>
            <span>PROJECT NAME</span>
            <h3>SmartCampus</h3>
          </div>

          <div>
            <span>PROJECT TYPE</span>
            <h3>Frontend Development</h3>
          </div>

          <div>
            <span>INSTITUTION</span>
            <h3>ABESEC Ghaziabad</h3>
          </div>

          <div>
            <span>TECHNOLOGIES</span>
            <h3>React.js · JavaScript · HTML · CSS</h3>
          </div>
        </div>
      </section>

      <section className="about-developer">
        <div className="about-section-label">
          <span>05</span>
          DEVELOPER
        </div>

        <div className="developer-content">
          <Code2 size={28} strokeWidth={1.5} />

          <div>
            <h2>Gauranshi Varshney</h2>
            <p>Full Stack Development Team</p>
            <span>ABESEC Ghaziabad</span>
          </div>
        </div>
      </section>

        <section className="about-cta">
        <div>
            <span>YOUR CAMPUS JOURNEY STARTS HERE</span>
            <h2>Make the most of your campus life.</h2>
        </div>

        <Link to="/">
            Explore SmartCampus
            <ArrowRight size={17} />
        </Link>
        </section>

    </main>
  )
}

export default AboutPage

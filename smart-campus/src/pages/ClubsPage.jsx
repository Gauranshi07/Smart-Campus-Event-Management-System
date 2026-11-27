
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { X } from 'lucide-react'
import Navbar from '../components/Navbar'
import ClubCard from '../components/ClubCard'
import ClubSlider from '../components/ClubSlider'
import { technicalClubs, nonTechnicalClubs } from '../data/clubs'
import './ClubsPage.css'

function ClubsPage() {
  const { category } = useParams()
  const [showAll, setShowAll] = useState(false)

  const isTechnical = category === 'technical'

  const clubs = isTechnical
    ? technicalClubs
    : category === 'non-technical'
      ? nonTechnicalClubs
      : []

  const title = isTechnical ? 'Technical Clubs' : 'Non-Technical Clubs'

  // Prevent background scrolling while popup is open
  useEffect(() => {
    document.body.style.overflow = showAll ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [showAll])

  if (!clubs.length) {
    return <div className="app">Page Not Found</div>
  }

  return (
    <div className="app">
      <Navbar />

      <section className="category-clubs-page">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>

        <div className="section-heading">
          <div>
            <span className="section-label">
              {isTechnical
                ? 'BUILD • CREATE • INNOVATE'
                : 'EXPRESS • CONNECT • EXPLORE'}
            </span>

            <h1>{title}</h1>

            <p>
              {isTechnical
                ? 'Explore technology, develop new skills and turn your ideas into real projects.'
                : 'Discover your interests, express your creativity and connect with your campus community.'}
            </p>
          </div>

          <button
            className="view-all"
            onClick={() => setShowAll(true)}
          >
            View All Clubs ↗
          </button>
        </div>

        <ClubSlider
          clubs={clubs}
          direction={isTechnical ? 'left' : 'right'}
        />
      </section>

      {/* Same-page popup */}
      {showAll && (
        <div
          className="clubs-modal-overlay"
          onClick={() => setShowAll(false)}
        >
          <div
            className="clubs-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="clubs-modal-heading">
              <div>
                <span className="section-label">
                  EXPLORE THE COMMUNITY
                </span>

                <h2>All {title}</h2>

                <p>Discover all clubs in this category.</p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowAll(false)}
                aria-label="Close"
              >
                <X size={21} />
              </button>
            </div>

            <div className="all-clubs-grid">
              {clubs.map((club) => (
                <ClubCard key={club.id} {...club} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClubsPage

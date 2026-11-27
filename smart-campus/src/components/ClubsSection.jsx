
import { useState, useEffect } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import ClubSlider from './ClubSlider'
import ClubCard from './ClubCard'
import { technicalClubs, nonTechnicalClubs } from '../data/clubs'
import './ClubsSection.css'

function ClubsSection() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const selectedClubs =
    selectedCategory === 'technical'
      ? technicalClubs
      : selectedCategory === 'non-technical'
        ? nonTechnicalClubs
        : []

  const title =
    selectedCategory === 'technical'
      ? 'Technical Clubs'
      : 'Non-Technical Clubs'

  useEffect(() => {
    document.body.style.overflow = selectedCategory ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedCategory])

  return (
    <section className="clubs-section" id="clubs">

      {/* Technical Clubs */}
      <div className="club-category-section">
        <div className="section-heading">
          <div>
            <span className="section-label">
              BUILD • CREATE • INNOVATE
            </span>
            <h2>Technical Clubs</h2>
            <p>
              Explore technology, develop new skills and turn
              your ideas into real projects.
            </p>
          </div>

          <button
            className="view-all"
            onClick={() => setSelectedCategory('technical')}
          >
            View All <ArrowUpRight size={16} />
          </button>
        </div>

        <ClubSlider clubs={technicalClubs} direction="left" />
      </div>

      {/* Non-Technical Clubs */}
      <div className="club-category-section">
        <div className="section-heading">
          <div>
            <span className="section-label">
              EXPRESS • CONNECT • EXPLORE
            </span>
            <h2>Non-Technical Clubs</h2>
            <p>
              Discover your interests, express your creativity
              and connect with the campus community.
            </p>
          </div>

          <button
            className="view-all"
            onClick={() => setSelectedCategory('non-technical')}
          >
            View All <ArrowUpRight size={16} />
          </button>
        </div>

        <ClubSlider clubs={nonTechnicalClubs} direction="right" />
      </div>

      {/* Same-page popup */}
      {selectedCategory && (
        <div
          className="clubs-modal-overlay"
          onClick={() => setSelectedCategory(null)}
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
                onClick={() => setSelectedCategory(null)}
                aria-label="Close popup"
              >
                <X size={21} />
              </button>
            </div>

            <div className="all-clubs-grid">
              {selectedClubs.map((club) => (
                <ClubCard key={club.id} {...club} />
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default ClubsSection

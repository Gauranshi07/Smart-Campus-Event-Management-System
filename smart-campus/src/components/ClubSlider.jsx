import ClubCard from './ClubCard'
import './ClubSlider.css'

function ClubSlider({ clubs, direction = 'left' }) {
  return (
    <div className="club-slider">
        <div
  className={`club-slider-track ${direction === 'right' ? 'slide-right' : 'slide-left'}`}
  style={{ '--slide-duration': `${clubs.length * 7}s` }}>
    
        {/* Original cards */}
        <div className="club-slider-group">
          {clubs.map((club) => (
            <div className="club-slide-item" key={club.id}>
              <ClubCard {...club} />
            </div>
          ))}
        </div>

        {/* Duplicate cards for infinite loop */}
        <div className="club-slider-group" aria-hidden="true">
          {clubs.map((club) => (
            <div className="club-slide-item" key={`duplicate-${club.id}`}>
              <ClubCard {...club} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClubSlider
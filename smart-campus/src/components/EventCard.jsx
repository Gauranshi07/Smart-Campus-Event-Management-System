
import { ArrowRight, CalendarDays, Users, Sparkles } from 'lucide-react'
import './EventCard.css'

const icons = {
  technology: CalendarDays,
  cultural: Users,
  hackathon: Sparkles
}

function EventCard({ category, title, description, type, onClick }) {
  const Icon = icons[type] || CalendarDays

  return (
    <article
      className="event-item"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick()
        }
      }}
    >
      <div className={`event-image event-image-${type}`}>
        <span>{category}</span>
        <Icon size={48} strokeWidth={1.3} />
      </div>

      <div className="event-details">
        <span className="event-type">{category}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="event-bottom">
          <span>View Event Details</span>
          <ArrowRight size={17} />
        </div>
      </div>
    </article>
  )
}

export default EventCard

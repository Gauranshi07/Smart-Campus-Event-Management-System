
import { ArrowRight } from 'lucide-react'
import EventCard from './EventCard'
import './EventsSection.css'

const events = [
  {
    id: 1,
    type: 'technology',
    category: 'TECH & INNOVATION',
    title: 'Tech Fest & Innovation Day',
    description: 'Explore new technologies, creative ideas and exciting student projects.'
  },
  {
    id: 2,
    type: 'cultural',
    category: 'CULTURAL',
    title: 'Campus Cultural Fest',
    description: 'Celebrate talent, music, art and the creative spirit of your campus.'
  },
  {
    id: 3,
    type: 'hackathon',
    category: 'CODING & INNOVATION',
    title: 'Hackathon & Coding Challenge',
    description: 'Team up, solve real problems and turn your ideas into solutions.'
  }
]

function EventsSection() {
  return (
    <section className="events-section" id="events">

      <div className="section-heading">
        <div>
          <span className="section-label">WHAT'S HAPPENING</span>

          <h2>Upcoming Events</h2>

          <p>
            Find events that inspire you, challenge you
            and bring your campus community together.
          </p>
        </div>

        <a href="#all-events" className="view-all">
          View All Events <ArrowRight size={16} />
        </a>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

    </section>
  )
}

export default EventsSection

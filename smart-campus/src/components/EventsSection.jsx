
import { useState, useEffect } from 'react'
import { ArrowRight, X, CalendarDays, MapPin, Clock, Users, Sparkles } from 'lucide-react'
import EventCard from './EventCard'
import './EventsSection.css'

const events = [
  {
    id: 1,
    type: 'technology',
    category: 'TECH & INNOVATION',
    title: 'Tech Fest & Innovation Day',
    description: 'Explore new technologies, creative ideas and exciting student projects.',
    details: 'A platform for students to explore emerging technologies, showcase innovative projects and connect with fellow technology enthusiasts.',
    date: 'Coming Soon',
    time: 'To Be Announced',
    venue: 'Campus Venue'
  },
  {
    id: 2,
    type: 'cultural',
    category: 'CULTURAL',
    title: 'Campus Cultural Fest',
    description: 'Celebrate talent, music, art and the creative spirit of your campus.',
    details: 'Celebrate campus life through music, dance, art and performances. Discover different talents and enjoy a vibrant cultural experience.',
    date: 'Coming Soon',
    time: 'To Be Announced',
    venue: 'Campus Venue'
  },
  {
    id: 3,
    type: 'hackathon',
    category: 'CODING & INNOVATION',
    title: 'Hackathon & Coding Challenge',
    description: 'Team up, solve real problems and turn your ideas into solutions.',
    details: 'Bring your ideas to life by collaborating with other students, solving practical challenges and building creative technical solutions.',
    date: 'Coming Soon',
    time: 'To Be Announced',
    venue: 'Campus Venue'
  }
]

function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showAllEvents, setShowAllEvents] = useState(false)

  const closePopup = () => {
    setSelectedEvent(null)
    setShowAllEvents(false)
  }

  useEffect(() => {
    const isOpen = selectedEvent || showAllEvents

    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedEvent, showAllEvents])

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

        <button
          className="view-all"
          onClick={() => setShowAllEvents(true)}
        >
          View All Events <ArrowRight size={16} />
        </button>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </div>

      {(selectedEvent || showAllEvents) && (
        <div
          className="event-modal-overlay"
          onClick={closePopup}
        >
          <div
            className="event-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="event-modal-heading">
              <div>
                <span className="section-label">
                  {showAllEvents ? 'EXPLORE CAMPUS EVENTS' : selectedEvent.category}
                </span>

                <h2>
                  {showAllEvents ? 'All Events' : selectedEvent.title}
                </h2>

                <p>
                  {showAllEvents
                    ? 'Discover what is happening around your campus.'
                    : selectedEvent.description}
                </p>
              </div>

              <button
                className="event-modal-close"
                onClick={closePopup}
                aria-label="Close popup"
              >
                <X size={21} />
              </button>
            </div>

            {showAllEvents ? (
              <div className="events-grid event-modal-grid">
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                    onClick={() => {
                      setShowAllEvents(false)
                      setSelectedEvent(event)
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="event-full-details">
                <div className={`event-image event-image-${selectedEvent.type}`}>
                  {selectedEvent.type === 'technology' && <CalendarDays size={48} />}
                  {selectedEvent.type === 'cultural' && <Users size={48} />}
                  {selectedEvent.type === 'hackathon' && <Sparkles size={48} />}
                </div>

                <p className="event-full-description">
                  {selectedEvent.details}
                </p>

                <div className="event-info-list">
                  <div>
                    <CalendarDays size={18} />
                    <span><strong>Date</strong>{selectedEvent.date}</span>
                  </div>

                  <div>
                    <Clock size={18} />
                    <span><strong>Time</strong>{selectedEvent.time}</span>
                  </div>

                  <div>
                    <MapPin size={18} />
                    <span><strong>Venue</strong>{selectedEvent.venue}</span>
                  </div>
                </div>

                <button className="event-register-btn" disabled>
                  Registration Opening Soon
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  )
}

export default EventsSection

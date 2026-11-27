
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EventsSection from '../components/EventsSection'
import ClubsSection from '../components/ClubsSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <EventsSection />
      <ClubsSection/>
    </div>
  )
}

export default Home

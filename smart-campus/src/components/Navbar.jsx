
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Smart<span>Campus.</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#events">Events</a>
        <a href="#clubs">Clubs</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
      </div>
    </nav>
  )
}

export default Navbar
